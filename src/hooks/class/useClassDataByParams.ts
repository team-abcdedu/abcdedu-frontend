import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ClassData } from '@/types/class';

interface UseClassDataByParamsProps {
  classDataList: ClassData[];
}

// 현재 경로에 해당하는 클래스, 서브클래스 데이터
function useClassDataByParams({ classDataList }: UseClassDataByParamsProps) {
  const { classId: classIdParam, subClassId: subClassIdParam } = useParams();

  const currentPageClassData = useMemo(() => {
    return classDataList?.find(d => d.title === classIdParam?.toUpperCase());
  }, [classDataList, classIdParam]);
  const currentPageSubClassData = useMemo(() => {
    return currentPageClassData?.subClasses.find(
      d => d.orderNumber === Number(subClassIdParam),
    );
  }, [currentPageClassData, subClassIdParam]);

  const isSubClassPage = !!classIdParam && !!subClassIdParam;

  return { currentPageClassData, currentPageSubClassData, isSubClassPage };
}

export default useClassDataByParams;
