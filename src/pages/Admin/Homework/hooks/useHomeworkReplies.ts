import { useQuery } from '@tanstack/react-query';

import AdminHomeworkApi from '@/services/admin/homework';

interface UseHomeworkRepliesProps {
  homeworkId: number | null;
}

function useHomeworkReplies({ homeworkId }: UseHomeworkRepliesProps) {
  const {
    data: homeworkReplies,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () =>
      AdminHomeworkApi.getHomeworkReplies({ homeworkId: homeworkId || 1 }),
    queryKey: ['admin', 'homework', 'replies', homeworkId],
    enabled: !!homeworkId,
  });

  return { homeworkReplies, isError, isLoading };
}

export default useHomeworkReplies;
