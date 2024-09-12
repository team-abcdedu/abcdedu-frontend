import { useQuery } from '@tanstack/react-query';

import ClassApi from '@/services/class';
import { ClassData } from '@/types/class';

function useGetClass() {
  const { data, isLoading, isError } = useQuery<ClassData[]>({
    queryKey: ['class'],
    queryFn: () => ClassApi.getClasses(),
  });

  return { data, isLoading, isError };
}

export default useGetClass;
