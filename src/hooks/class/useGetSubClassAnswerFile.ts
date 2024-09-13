import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseGetSubClassAnswerFileProps {
  assignmentAnswerFileId: number;
}

function useGetSubClassAnswerFile({
  assignmentAnswerFileId,
}: UseGetSubClassAnswerFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-answer-file', assignmentAnswerFileId],
    queryFn: () => ClassApi.getSubClassAnswerFile(assignmentAnswerFileId),
    enabled: !!assignmentAnswerFileId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassAnswerFile;
