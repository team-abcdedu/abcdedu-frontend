import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';

import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IStudentFileUploadForm {
  assignmentFileId: number;
  file: File;
}

function useStudentFileUpload() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IStudentFileUploadForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IStudentFileUploadForm> = {
    assignmentFileId: {
      required: '파일 ID를 입력해주세요',
    },
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const fileMutation = useMutation({
    mutationFn: (data: { assignmentFileId: number; file: File }) =>
      AdminClassApi.uploadStudentFile(data),
    onError: error => {
      alert('제출용 파일 등록에 실패했습니다.');
      if (isAxiosError(error)) {
        console.error(error.response?.data.result.message);
        return;
      }
      console.error(error);
    },
  });

  return { register, errors, handleSubmit, reset, fieldRules, fileMutation };
}

export default useStudentFileUpload;
