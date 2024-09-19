import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import HomeworkApi from '@/services/homework';
import { HomeworkAnswer } from '@/types/homework';

export interface IHomeworkForm {
  [key: string]: string;
}

interface UseHomeworkFormProps {
  homeworkId: number;
  setModalState: Dispatch<SetStateAction<'success' | 'error'>>;
  toggleModal: () => void;
}

function useHomeworkForm({
  homeworkId,
  setModalState,
  toggleModal,
}: UseHomeworkFormProps) {
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
      setModalState('success');
      toggleModal();
    },
    onError: () => {
      setModalState('error');
      toggleModal();
    },
  });

  const submitHandler: SubmitHandler<IHomeworkForm> = (
    data: IHomeworkForm,
    e,
  ) => {
    e?.preventDefault();

    const refinedData = Object.values(data).map(v => {
      return { answer: v };
    });

    mutation.mutate(refinedData);
  };

  const onSubmit = handleSubmit(submitHandler);

  return { register, errors, reset, onSubmit };
}

export default useHomeworkForm;
