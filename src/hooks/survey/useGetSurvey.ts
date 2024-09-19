import { useQuery } from '@tanstack/react-query';

import SurveyApi from '@/services/survey';

interface UseGetSurveyProps {
  surveyId: number;
}

function useGetSurvey({ surveyId }: UseGetSurveyProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['survey', surveyId],
    queryFn: () => SurveyApi.getSurvey({ surveyId }),
  });

  return { survey: data, isLoading, isError };
}

export default useGetSurvey;
