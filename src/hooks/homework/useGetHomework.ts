import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { ApiError } from '@/libs/errors';
import HomeworkApi from '@/services/homework';
import useBoundStore from '@/stores';

interface UseGetHomeworkProps {
  homeworkId: number;
}

function useGetHomework({ homeworkId }: UseGetHomeworkProps) {
  const [queryEnabled, setQueryEnabled] = useState(false);
  const { user, accessToken } = useBoundStore.getState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['homework', homeworkId.toString()],
    queryFn: () => HomeworkApi.getHomework({ homeworkId }),
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

export default useGetHomework;
