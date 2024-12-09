import { useMutation } from '@tanstack/react-query';

import { ISurveyForm } from '@/pages/Survey/hooks/useSurveyForm';
import SurveyApi from '@/services/survey';
import { SurveyAnswer, SurveyQuestionType } from '@/types/survey';

interface useSurveyMutationProps {
  surveyId: number;
}

function useSurveyMutation({ surveyId }: useSurveyMutationProps) {
  const mutation = useMutation({
    mutationFn: (data: ISurveyForm) => {
      const refinedData: SurveyAnswer[] = Object.entries(data).map(
        ([key, value]) => {
          const type = key.split('#')[1] as SurveyQuestionType;
          return { answer: value, type };
        },
      );

      return SurveyApi.postSurvey({
        surveyId,
        answers: refinedData,
      });
    },
  });

  return { mutation };
}

export default useSurveyMutation;
