import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { ApiError } from '@/libs/errors';
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

  const errorStatus = error instanceof ApiError ? error.status : null;

  return { data, isLoading, isError, errorStatus };
}

export default useGetSurvey;
