import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';
import useBoundStore from '@/stores';

interface UseSubClassFileProps {
  fileId: number | undefined;
}

function useSubClassFile({ fileId }: UseSubClassFileProps) {
  const user = useBoundStore(state => state.user);
  const canAccessFile = user?.role === '관리자' || user?.role === '학생';

  const {
    data: fileData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['class', 'sub-class-general-file', fileId],
    queryFn: () => ClassApi.getSubClassFile(fileId || null),
    enabled: !!fileId && canAccessFile,
  });

  return { fileData, isLoading, isError, error };
}

export default useSubClassFile;
