import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import SurveyApi from '@/services/survey';
import { SurveyAnswer } from '@/types/survey';

export interface ISurveyForm {
  [key: string]: string;
}

interface UseSurveyFormProps {
  surveyId: number;
  toggleModal: () => void;
  setModalState: Dispatch<SetStateAction<'success' | 'error'>>;
}

function useSurveyForm({
  surveyId,
  toggleModal,
  setModalState,
}: UseSurveyFormProps) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ISurveyForm>({ mode: 'onSubmit' });

  const mutation = useMutation({
    mutationFn: (data: SurveyAnswer[]) =>
      SurveyApi.postSurvey({
        surveyId,
        answers: data,
      }),
    onSuccess: () => {
      reset();
      toggleModal();
      setModalState('success');
    },
    onError: () => {
      toggleModal();
      setModalState('error');
    },
  });

  const submitHandler: SubmitHandler<ISurveyForm> = (data: ISurveyForm, e) => {
    e?.preventDefault();

    const refinedData = Object.entries(data).map(([key, value]) => {
      const type = key.split('#')[1];
      return { answer: value, type };
    });

    mutation.mutate(refinedData as SurveyAnswer[]);
  };

  const onSubmit = handleSubmit(submitHandler);

  return { register, reset, errors, onSubmit };
}

export default useSurveyForm;
