import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';

interface UseSubClassProps {
  subLectureId: number;
  enabled: boolean;
}

function useGetSubClassFiles({ subLectureId, enabled }: UseSubClassProps) {
  const { data } = useQuery({
    queryKey: ['sub-class-files', subLectureId],
    queryFn: () => ClassApi.getSubClassFiles(subLectureId || 0),
    enabled,
  });

  return { data };
}

export default useGetSubClassFiles;
