import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

interface IStudentFileUpDateForm {
  file: FileList;
}

interface UseStudentFileUpdateProps {
  assignmentAnswerFileId: number;
}

function useStudentFileUpdate({
  assignmentAnswerFileId,
}: UseStudentFileUpdateProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IStudentFileUpDateForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IStudentFileUpDateForm> = {
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const mutation = useMutation({
    mutationFn: (data: { assignmentAnswerFileId: number; file: File }) =>
      AdminClassApi.updateStudentFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-student-file', assignmentAnswerFileId],
      });
      alert('파일 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('파일 수정에 실패했습니다.');
    },
  });

  const submitForm: SubmitHandler<IStudentFileUpDateForm> = (data, e) => {
    e?.preventDefault();
    const file = data.file[0];
    mutation.mutate({ assignmentAnswerFileId, file });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, errors, fieldRules, onSubmit };
}

export default useStudentFileUpdate;
