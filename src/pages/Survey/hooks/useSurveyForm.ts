import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import SurveyApi from '@/services/survey';
import useBoundStore from '@/stores';
import { SurveyAnswer } from '@/types/survey';

export interface ISurveyForm {
  [key: string]: string;
}

interface UseSurveyFormProps {
  surveyId: number;
}

function useSurveyForm({ surveyId }: UseSurveyFormProps) {
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
      alert('설문이 제출되었습니다.');
    },
    onError: () => {
      alert('설문 제출 중 문제가 발생했습니다.');
    },
  });

  const { user } = useBoundStore();

  const submitHandler: SubmitHandler<ISurveyForm> = (data: ISurveyForm, e) => {
    e?.preventDefault();

    if (!user || (user.role !== '학생' && user.role !== '관리자')) {
      alert('학생 등급 이상만 설문에 참여할 수 있습니다.');
      return;
    }

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
