import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassGeneralFileProps {
  assignmentFileId: number;
}

function useGetSubClassGeneralFile({
  assignmentFileId,
}: UseSubClassGeneralFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-file', assignmentFileId],
    queryFn: () => ClassApi.getSubClassFile(assignmentFileId),
  });

  return { data, isLoading, isError };
}

export default useGetSubClassGeneralFile;
