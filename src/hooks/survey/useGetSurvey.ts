import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import SurveyApi from '@/services/survey';
import useBoundStore from '@/stores';

interface UseGetSurveyProps {
  surveyId: number;
}

function useGetSurvey({ surveyId }: UseGetSurveyProps) {
  const [queryEnabled, setQueryEnabled] = useState(false);
  const { user, accessToken } = useBoundStore.getState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['survey', surveyId],
    queryFn: () => SurveyApi.getSurvey({ surveyId }),
    enabled: queryEnabled,
  });

  useEffect(() => {
    if ((user && !!accessToken) || !user) {
      setQueryEnabled(true);
    }
  }, [user, accessToken]);

  const errorCode = isAxiosError(error) ? error.response?.status : null;

  return { data, isLoading, isError, errorCode };
}

export default useGetSurvey;
