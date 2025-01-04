import { useQuery } from '@tanstack/react-query';

import AdminHomeworkApi from '@/services/admin/homework';

interface UseHomeworkListProps {
  page: number;
  size?: number;
}

function useHomeworkList({ page = 1, size = 10 }: UseHomeworkListProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['homework', 'list', `${page}-${size}`],
    queryFn: () => AdminHomeworkApi.getHomeworkList({ page, size }),
  });

  const homeworkList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { homeworkList, totalElements, isLoading, isError };
}

export default useHomeworkList;
