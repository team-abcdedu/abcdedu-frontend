import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IStudentFileUploadForm {
  file: FileList;
}

interface UseStudentFileUploadProps {
  assignmentFileId: number;
}

function useStudentFileUpload({ assignmentFileId }: UseStudentFileUploadProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IStudentFileUploadForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IStudentFileUploadForm> = {
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const fileMutation = useMutation({
    mutationFn: (data: { file: File }) =>
      AdminClassApi.uploadStudentFile({ assignmentFileId, file: data.file }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-student-file', assignmentFileId],
      });
      alert('파일이 등록되었습니다.');
    },
    onError: () => {
      alert('파일 등록 중 문제가 발생했습니다.');
    },
  });

  const submitForm: SubmitHandler<IStudentFileUploadForm> = (data, e) => {
    e?.preventDefault();
    const file = data.file[0];
    fileMutation.mutate({ file });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, errors, fieldRules, onSubmit };
}

export default useStudentFileUpload;
