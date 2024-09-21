import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseGetSubClassStudentFileProps {
  assignmentAnswerFileId: number | undefined;
  enabled: boolean;
}

function useGetSubClassStudentFile({
  assignmentAnswerFileId,
  enabled,
}: UseGetSubClassStudentFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['class', 'sub-class-student-file', assignmentAnswerFileId],
    queryFn: () => ClassApi.getSubClassAnswerFile(assignmentAnswerFileId),
    enabled,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassStudentFile;
