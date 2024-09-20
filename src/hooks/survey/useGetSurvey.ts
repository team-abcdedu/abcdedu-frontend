import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import SurveyApi from '@/services/survey';

interface UseGetSurveyProps {
  surveyId: number;
}

function useGetSurvey({ surveyId }: UseGetSurveyProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['survey', surveyId],
    queryFn: () => SurveyApi.getSurvey({ surveyId }),
  });

  const errorCode = isAxiosError(error) ? error.response?.status : null;

  return { data, isLoading, isError, errorCode };
}

export default useGetSurvey;
