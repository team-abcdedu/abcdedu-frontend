import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';
import useBoundStore from '@/stores';

interface UseSubClassGeneralFileProps {
  assignmentFileId: number | null;
}

function useGetSubClassGeneralFile({
  assignmentFileId,
}: UseSubClassGeneralFileProps) {
  const { user } = useBoundStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['class', 'sub-class-general-file', assignmentFileId],
    queryFn: () => ClassApi.getSubClassFile(assignmentFileId),
    enabled:
      !!assignmentFileId && (user?.role === '관리자' || user?.role === '학생'),
  });

  return { data, isLoading, isError, error };
}

export default useGetSubClassGeneralFile;
