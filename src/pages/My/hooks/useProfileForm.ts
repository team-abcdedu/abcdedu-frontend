import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { compressImage } from '@/libs/compressor';
import { FieldRules } from '@/types';
import { UserInfo } from '@/types/user';
import { convertURLtoFile } from '@/utils/convertURLtoFile';

import useProfileMutation from './useProfileMutation';

interface IProfileFormInput {
  name: string;
  school: string;
  studentId: number;
}

const MAX_FILE_SIZE = 2 * 1024 * 1024;

interface UserProfileForm {
  user: UserInfo;
  onClose: () => void;
}

export default function useProfileForm({ user, onClose }: UserProfileForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileFormInput>({
    defaultValues: {
      name: user.name,
      school: user.school ?? '',
      studentId: user.studentId ?? undefined,
    },
  });

  const updateMutation = useProfileMutation();

  const fieldRules: FieldRules<IProfileFormInput> = {
    name: {
      maxLength: {
        value: 10,
        message: '이름은 최대 10자까지 입력할 수 있습니다.',
      },
    },
    school: {
      maxLength: {
        value: 10,
        message: '학교는 최대 10자까지 입력할 수 있습니다.',
      },
    },
    studentId: {},
  };

  const [imagePreview, setImagePreview] = useState(user?.imageUrl);
  const [compressedImageFile, setCompressedImageFile] = useState<File | null>(
    null,
  );

  // 이미지 File 압축 및 미리보기 추가
  const processImage = async (file: File) => {
    try {
      const compressedFile = await compressImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(compressedFile);
      setCompressedImageFile(compressedFile);
    } catch (error) {
      console.error('이미지 압축 실패: ', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files?.[0];
    if (!inputFile) return;

    if (inputFile.size > MAX_FILE_SIZE) {
      alert('이미지 파일의 크기는 2MB를 초과할 수 없습니다.');
      e.target.value = '';
      return;
    }

    processImage(inputFile);
  };

  const resetImageFile = () => {
    setImagePreview('');
  };

  const getCurrentImageFile = async () => {
    if (compressedImageFile) return compressedImageFile;
    if (imagePreview && user.imageUrl) return convertURLtoFile(user.imageUrl);
    return null;
  };

  const updateProfile: SubmitHandler<IProfileFormInput> = async data => {
    const { name, school, studentId } = data;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('school', school);
    formData.append('studentId', studentId.toString());

    // 이미지 처리
    const currentImageFile = await getCurrentImageFile();
    if (currentImageFile) formData.append('file', currentImageFile);

    updateMutation.mutate(formData, {
      onSuccess: () => {
        alert('수정이 완료되었습니다.');
        onClose();
      },
    });
  };

  const onSubmit = async () => {
    handleSubmit(updateProfile)();
  };

  return {
    isSubmitButtonDisabled: updateMutation.isPending,
    imagePreview,
    handleFileChange,
    resetImageFile,
    fieldRules,
    errors,
    register,
    onSubmit,
  };
}
