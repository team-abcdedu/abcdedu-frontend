import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseHomeworkProps {
  homeworkId: number;
}

function useHomework({ homeworkId }: UseHomeworkProps) {
  const {
    data: homework,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['homework', homeworkId.toString()],
    queryFn: () => HomeworkApi.getHomework({ homeworkId }),
  });

  return { homework, isLoading, isError };
}

export default useHomework;
