import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import ClassApi from '@/services/class';
import { ClassData, SubClassIdMap } from '@/types/class';

function useClassDataList() {
  const {
    data: classDataList,
    isLoading,
    isError,
  } = useQuery<ClassData[]>({
    queryKey: ['class'],
    queryFn: () => ClassApi.getClasses(),
  });

  // ClassId-subClassOrderNumber 를 key 로, subClassId를 value 로 하는 객체를 만들어줍니다.
  const subClassIdMap = useMemo(() => {
    const newObj: SubClassIdMap = {};
    classDataList?.forEach(c => {
      c.subClasses.forEach(sc => {
        newObj[`${c.title}-${sc.orderNumber}`] = Number(sc.subClassId);
      });
    });
    return newObj;
  }, [classDataList]);

  return {
    classDataList,
    subClassIdMap,
    isLoading,
    isError,
  };
}

export default useClassDataList;
