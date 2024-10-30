import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import SurveyApi from '@/services/survey';

interface UseGetSurveyProps {
  surveyId: number;
}

function useGetSurvey({ surveyId }: UseGetSurveyProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['survey', surveyId],
    queryFn: () => SurveyApi.getSurvey({ surveyId }),
  });

  const errorStatus = error instanceof ApiError ? error.status : null;

  return { data, isLoading, isError, errorStatus };
}

export default useGetSurvey;
