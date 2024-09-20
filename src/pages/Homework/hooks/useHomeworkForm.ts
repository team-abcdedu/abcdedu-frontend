import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import HomeworkApi from '@/services/homework';
import useBoundStore from '@/stores';
import { HomeworkAnswer } from '@/types/homework';

export interface IHomeworkForm {
  [key: string]: string;
}

interface UseHomeworkFormProps {
  homeworkId: number;
}

function useHomeworkForm({ homeworkId }: UseHomeworkFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IHomeworkForm>({ mode: 'onSubmit' });

  const mutation = useMutation({
    mutationFn: (data: HomeworkAnswer[]) =>
      HomeworkApi.postHomework({ homeworkId, answers: data }),
    onSuccess: () => {
      reset();
      alert('과제 제출이 완료되었습니다.');
    },
    onError: () => {
      alert('과제 제출 중 문제가 발생했습니다.');
    },
  });

  const { user } = useBoundStore();

  const submitHandler: SubmitHandler<IHomeworkForm> = (
    data: IHomeworkForm,
    e,
  ) => {
    e?.preventDefault();

    if (user?.role !== '관리자' && user?.role !== '학생') {
      alert('학생 이상만 과제를 제출할 수 있습니다.');
      return;
    }

    const refinedData = Object.values(data).map(v => {
      return { answer: v };
    });

    mutation.mutate(refinedData);
  };

  const onSubmit = handleSubmit(submitHandler);

  return { register, errors, reset, onSubmit };
}

export default useHomeworkForm;
