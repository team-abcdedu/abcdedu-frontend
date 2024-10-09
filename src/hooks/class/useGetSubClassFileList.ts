import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface useGetSubClassFileListProps {
  subLectureId: number;
}

function useGetSubClassFileList({ subLectureId }: useGetSubClassFileListProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['class', 'sub-class-file-list', subLectureId],
    queryFn: () => ClassApi.getSubClassFileList(subLectureId),
    enabled: !!subLectureId,
  });

  return { data, isLoading, isError };
}

export default useGetSubClassFileList;
