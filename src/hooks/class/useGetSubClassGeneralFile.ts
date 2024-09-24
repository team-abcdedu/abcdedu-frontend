import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

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

  const errorMessage = isAxiosError(error)
    ? error.response?.data.message
    : '파일을 불러오는 도중 문제가 생겼습니다.';

  return { data, isLoading, isError, errorMessage };
}

export default useGetSubClassGeneralFile;
