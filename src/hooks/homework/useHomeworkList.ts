import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseHomeworkListProps {
  page: number;
  size?: number;
}

function useHomeworkList({ page = 1, size = 10 }: UseHomeworkListProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['homework', 'list', `${page}-${size}`],
    queryFn: () => HomeworkApi.getHomeworkList({ page, size }),
  });

  const homeworkList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { homeworkList, totalElements, isLoading, isError };
}

export default useHomeworkList;
