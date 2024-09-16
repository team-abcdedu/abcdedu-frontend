import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseGetSubClassStudentFileProps {
  assignmentAnswerFileId: number;
}

function useGetSubClassStudentFile({
  assignmentAnswerFileId,
}: UseGetSubClassStudentFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-answer-file', assignmentAnswerFileId],
    queryFn: () => ClassApi.getSubClassAnswerFile(assignmentAnswerFileId),
    enabled: !!assignmentAnswerFileId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassStudentFile;
