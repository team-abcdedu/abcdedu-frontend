import { useQuery } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';

interface UseGetHomeworksProps {
  page: number;
  size: number;
}

function useGetHomeworkList({ page = 1, size = 1 }: UseGetHomeworksProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['homeworks', `${page}-${size}`],
    queryFn: () => HomeworkApi.getHomeworkList(page, size),
  });

  // 현재는 1페이지 1번만 가져옴
  return { data, isLoading, isError };
}

export default useGetHomeworkList;
