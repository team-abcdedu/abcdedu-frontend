import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassGeneralFileProps {
  assignmentFileId: number | null;
}

function useGetSubClassGeneralFile({
  assignmentFileId,
}: UseSubClassGeneralFileProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-general-file', assignmentFileId],
    queryFn: () => ClassApi.getSubClassFile(assignmentFileId),
    enabled: !!assignmentFileId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassGeneralFile;
