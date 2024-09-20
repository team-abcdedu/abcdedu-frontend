import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseGetHomeworksProps {
  page: number;
  size?: number;
}

function useGetHomeworkList({ page = 1, size = 10 }: UseGetHomeworksProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['homework-list', `${page}-${size}`],
    queryFn: () => HomeworkApi.getHomeworkList({ page, size }),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { list, totalElements, isLoading, isError };
}

export default useGetHomeworkList;
