import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';

import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IFileUploadForm {
  subLectureId: number;
  type: string;
  file: File;
}

function useGeneralFileUpload() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFileUploadForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IFileUploadForm> = {
    subLectureId: {
      required: '클래스 ID를 입력해주세요',
    },
    type: {
      required: '타입을 선택해주세요',
    },
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const fileMutation = useMutation({
    mutationFn: (data: { subLectureId: number; type: string; file: File }) =>
      AdminClassApi.uploadGeneralFile(data),
    onError: error => {
      alert('파일 등록에 실패했습니다.');
      if (isAxiosError(error)) {
        console.error(error.response?.data.result.message);
        return;
      }
      console.error(error);
    },
  });

  return { register, errors, handleSubmit, reset, fieldRules, fileMutation };
}

export default useGeneralFileUpload;
