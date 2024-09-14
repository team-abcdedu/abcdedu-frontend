import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  assignmentFileId: number;
}

function useGetSubClassFile({ assignmentFileId }: UseSubClassProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-file', assignmentFileId],
    queryFn: () => ClassApi.getSubClassFile(assignmentFileId),
  });

  return { data, isLoading, isError };
}

export default useGetSubClassFile;
