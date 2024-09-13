import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseGetHomeworkProps {
  homeworkId: number;
}

function useGetHomework({ homeworkId }: UseGetHomeworkProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['homework', homeworkId],
    queryFn: () => HomeworkApi.getHomework(homeworkId),
  });

  return { data, isLoading, isError };
}

export default useGetHomework;
