import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

export interface IFileUpdateForm {
  file: FileList;
}

interface UseFileUpdateProps {
  subLectureId: number;
  assignmentFileId: number;
}

function useFileUpdate({ subLectureId, assignmentFileId }: UseFileUpdateProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFileUpdateForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IFileUpdateForm> = {
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  const mutation = useMutation({
    mutationFn: (data: { assignmentFileId: number; file: File }) =>
      AdminClassApi.updateGeneralFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-general-file', assignmentFileId],
      });
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-file-list', subLectureId],
      });
      alert('파일 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('파일 수정에 실패했습니다.');
    },
  });

  const submitForm: SubmitHandler<IFileUpdateForm> = (data, e) => {
    e?.preventDefault();
    const file = data.file[0];
    mutation.mutate({ assignmentFileId, file });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, errors, onSubmit, fieldRules, reset };
}

export default useFileUpdate;
