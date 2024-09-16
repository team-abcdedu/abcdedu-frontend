import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseGetSubClassStudentFileProps {
  assignmentAnswerFileId: number | null;
}

function useGetSubClassStudentFile({
  assignmentAnswerFileId,
}: UseGetSubClassStudentFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-student-file', assignmentAnswerFileId],
    queryFn: () => ClassApi.getSubClassAnswerFile(assignmentAnswerFileId),
    enabled: !!assignmentAnswerFileId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassStudentFile;
