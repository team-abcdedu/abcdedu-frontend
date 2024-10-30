import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import HomeworkApi from '@/services/homework';

interface UseGetHomeworkProps {
  homeworkId: number;
}

function useGetHomework({ homeworkId }: UseGetHomeworkProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['homework', homeworkId.toString()],
    queryFn: () => HomeworkApi.getHomework({ homeworkId }),
  });

  const errorStatus = error instanceof ApiError ? error.status : null;

  return { data, isLoading, isError, errorStatus };
}

export default useGetHomework;
