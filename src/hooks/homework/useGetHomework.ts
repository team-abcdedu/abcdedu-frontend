import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

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

  const errorCode = isAxiosError(error) ? error.response?.status : null;

  return { data, isLoading, isError, errorCode };
}

export default useGetHomework;
