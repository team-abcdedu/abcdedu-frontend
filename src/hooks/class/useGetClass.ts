import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import ClassApi from '@/services/class';
import useBoundStore from '@/stores';
import { ClassData, SubClassIdMap } from '@/types/class';

function useGetClass() {
  const setSubClassIdMap = useBoundStore(state => state.setSubClassIdMap);
  const setClassDataList = useBoundStore(state => state.setClassDataList);

  const {
    data: classDataList,
    isLoading,
    isError,
  } = useQuery<ClassData[]>({
    queryKey: ['class'],
    queryFn: () => ClassApi.getClasses(),
  });

  useEffect(() => {
    if (classDataList) {
      setClassDataList(classDataList);
    }
  }, [classDataList, setClassDataList]);

  // ClassId-subClassOrderNumber 를 key 로, subClassId를 value 로 하는 객체를 만들어줍니다.
  useEffect(() => {
    const newObj: SubClassIdMap = {};
    classDataList?.forEach(c => {
      c.subClasses.forEach(sc => {
        newObj[`${c.title}-${sc.orderNumber}`] = Number(sc.subClassId);
      });
    });
    setSubClassIdMap(newObj);
  }, [classDataList, setSubClassIdMap]);

  return {
    classDataList,
    isLoading,
    isError,
  };
}

export default useGetClass;
