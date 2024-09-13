import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  subLectureId: number;
  enabled: boolean;
}

function useGetSubClassFileList({ subLectureId, enabled }: UseSubClassProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-fileList', subLectureId],
    queryFn: () => ClassApi.getSubClassFileList(subLectureId || 0),
    enabled,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassFileList;
