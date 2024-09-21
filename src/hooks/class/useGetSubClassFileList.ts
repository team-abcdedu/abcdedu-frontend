import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  subLectureId: number;
}

function useGetSubClassFileList({ subLectureId }: UseSubClassProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['class', 'sub-class-file-list', subLectureId],
    queryFn: () => ClassApi.getSubClassFileList(subLectureId),
    enabled: !!subLectureId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassFileList;
