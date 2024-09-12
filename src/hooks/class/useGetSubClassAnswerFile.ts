import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseGetSubClassAnswerFileProps {
  assignmentAnswerFileId: number;
  enabled: boolean;
}

function useGetSubClassAnswerFile({
  assignmentAnswerFileId,
  enabled,
}: UseGetSubClassAnswerFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-answer-file', assignmentAnswerFileId],
    queryFn: () => ClassApi.getSubClassAnswerFile(assignmentAnswerFileId || 0),
    enabled,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassAnswerFile;
