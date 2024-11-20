import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ClassData } from '@/types/class';

interface UseClassDataByParamsProps {
  classDataList: ClassData[];
}

// 현재 경로에 해당하는 클래스, 서브클래스 데이터
function useClassDataByParams({ classDataList }: UseClassDataByParamsProps) {
  const { classId, subClassId } = useParams();

  const currentPageClassData = useMemo(() => {
    return classDataList?.find(d => d.title === classId?.toUpperCase());
  }, [classDataList, classId]);
  const currentPageSubClassData = useMemo(() => {
    return currentPageClassData?.subClasses.find(
      d => d.orderNumber === Number(subClassId),
    );
  }, [currentPageClassData, subClassId]);

  const isSubClassPage = !!classId && !!subClassId;

  return { currentPageClassData, currentPageSubClassData, isSubClassPage };
}

export default useClassDataByParams;
