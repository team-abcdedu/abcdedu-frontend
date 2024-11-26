import { useQuery } from '@tanstack/react-query';

import SurveyApi from '@/services/survey';

interface UseSurveyProps {
  surveyId: number;
}

function useSurvey({ surveyId }: UseSurveyProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['survey', surveyId],
    queryFn: () => SurveyApi.getSurvey({ surveyId }),
  });

  return { data, isLoading, isError };
}

export default useSurvey;
