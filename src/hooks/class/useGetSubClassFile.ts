import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  assignmentFileId: number;
}

function useGetSubClassFile({ assignmentFileId }: UseSubClassProps) {
  const { data } = useQuery({
    queryKey: ['sub-class-file', assignmentFileId],
    queryFn: () => ClassApi.getSubClassFile(assignmentFileId || 0),
  });

  return { data };
}

export default useGetSubClassFile;
