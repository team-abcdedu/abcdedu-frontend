import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import HomeworkApi from '@/services/homework';

interface UseGetHomeworkProps {
  homeworkId: number;
}

function useGetHomework({ homeworkId }: UseGetHomeworkProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['homework', homeworkId.toString()],
    queryFn: () => HomeworkApi.getHomework({ homeworkId }),
  });

  const errorCode = isAxiosError(error) ? error.response?.status : null;

  return { data, isLoading, isError, errorCode };
}

export default useGetHomework;
