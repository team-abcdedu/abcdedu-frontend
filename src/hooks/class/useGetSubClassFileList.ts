import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  subLectureId: number;
}

function useGetSubClassFileList({ subLectureId }: UseSubClassProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sub-class-file-list', subLectureId],
    queryFn: () => ClassApi.getSubClassFileList(subLectureId),
  });

  return { data, isLoading, isError };
}

export default useGetSubClassFileList;
