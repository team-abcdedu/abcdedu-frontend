import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import HomeworkApi from '@/services/homework';
import { MyHomeworkAnswerInfo, QuestionInfo } from '@/types/homework';

interface IHomeworkForm {
  [key: string]: string | string[];
}

interface UseHomeworkFormProps {
  homeworkId: number;
  questions: QuestionInfo[];
  setModalState: (value: 'success' | 'error') => void;
  toggleModal: () => void;
}

function useHomeworkForm({
  homeworkId,
  questions,
  setModalState,
  toggleModal,
}: UseHomeworkFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IHomeworkForm>({ mode: 'onSubmit' });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: MyHomeworkAnswerInfo[]) =>
      HomeworkApi.postMyHomework(homeworkId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['my-homework', homeworkId.toString()],
      });
      reset();
      setModalState('success');
      toggleModal();
    },
    onError: error => {
      console.error(error);
      setModalState('error');
      toggleModal();
    },
  });

  const submitHandler: SubmitHandler<IHomeworkForm> = (
    data: IHomeworkForm,
    e,
  ) => {
    e?.preventDefault();

    const refinedData = Object.entries(data).map(([key, value]) => {
      const questionId = Number(key);

      if (questions[questionId - 1].type === 'MULTIPLE_OPTION') {
        return {
          questionId,
          optionIndexes: Array.from(value).map((v: string) => Number(v)),
        };
      }
      if (questions[questionId - 1].type === 'SINGLE_OPTION') {
        return {
          questionId,
          optionIndex: Number(value),
        };
      }
      return {
        questionId,
        content: value as string,
      };
    });

    mutation.mutate(refinedData);
  };

  const onSubmit = handleSubmit(submitHandler);

  return { register, errors, reset, onSubmit };
}

export default useHomeworkForm;
