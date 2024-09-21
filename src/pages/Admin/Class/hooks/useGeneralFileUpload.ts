import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IFileUploadForm {
  type: string;
  file: File;
}

interface UseGeneralFileUploadProps {
  subLectureId: number;
}

function useGeneralFileUpload({ subLectureId }: UseGeneralFileUploadProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFileUploadForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IFileUploadForm> = {
    type: {
      required: '타입을 선택해주세요',
    },
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const fileMutation = useMutation({
    mutationFn: (data: IFileUploadForm) =>
      AdminClassApi.uploadGeneralFile({ ...data, subLectureId }),
    onSuccess: () => {
      alert('파일이 등록되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-file-list', subLectureId],
      });
    },
    onError: () => {
      alert('파일 등록에 실패했습니다.');
    },
  });

  return { register, errors, handleSubmit, reset, fieldRules, fileMutation };
}

export default useGeneralFileUpload;
