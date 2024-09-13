import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseGetMyHomeworkProps {
  homeworkId: number;
}

function useGetMyHomework({ homeworkId }: UseGetMyHomeworkProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-homework', { homeworkId }],
    queryFn: () => HomeworkApi.getMyHomework(homeworkId),
  });

  return { data, isLoading, isError };
}

export default useGetMyHomework;
