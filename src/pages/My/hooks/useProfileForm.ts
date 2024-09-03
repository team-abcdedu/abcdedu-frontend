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
  image: FileList | null;
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
    watch,
    setValue,
    formState: { errors },
  } = useForm<IProfileFormInput>({
    defaultValues: {
      name: user.name,
      school: user.school ?? '',
      studentId: user.studentId ?? undefined,
      image: null,
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
    image: {},
  };

  const [imagePreview, setImagePreview] = useState('');
  const [compressedImageFile, setCompressedImageFile] = useState<File | null>(
    null,
  );

  const resetImageFile = () => {
    setValue('image', null);
    setImagePreview('');
  };

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

  const imageFile = watch('image');
  if (imageFile && imageFile.length > 0) {
    const file = imageFile[0];

    if (file.size > MAX_FILE_SIZE) {
      alert('이미지 파일의 크기는 2MB를 초과할 수 없습니다.');
      resetImageFile();
    } else {
      processImage(file);
    }
  }

  const updateProfile: SubmitHandler<IProfileFormInput> = async data => {
    const { name, school, studentId } = data;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('school', school);
    formData.append('studentId', studentId.toString());

    // 이미지 처리
    // 기존 이미지가 있고, 변경하지 않는 경우 url -> File 변환
    // 기존 이미지가 없거나 기존 이미지를 삭제할 경우 new Blob
    // 테스트 필요, CORS 있을 수 있음
    const prevImageFile = user.imageUrl
      ? await convertURLtoFile(user.imageUrl)
      : new Blob();
    formData.append('file', compressedImageFile ?? prevImageFile);

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
    imagePreview,
    resetImageFile,
    fieldRules,
    errors,
    register,
    onSubmit,
  };
}
