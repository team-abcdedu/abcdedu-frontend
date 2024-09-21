import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IFileUploadForm {
  type: string;
  file: FileList;
}

interface UseGeneralFileUploadProps {
  subLectureId: number;
}

function useGeneralFileUpload({ subLectureId }: UseGeneralFileUploadProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
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
    mutationFn: (data: { type: string; file: File }) =>
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

  const submitForm: SubmitHandler<IFileUploadForm> = (data, e) => {
    e?.preventDefault();
    const file = data.file[0];
    fileMutation.mutate({ type: data.type, file });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, errors, fieldRules, onSubmit };
}

export default useGeneralFileUpload;
