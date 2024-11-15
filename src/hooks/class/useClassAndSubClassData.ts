import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ClassData } from '@/types/class';

interface UseClassAndSubClassDataProps {
  classDataList: ClassData[];
}

// 현재 경로에 해당하는 클래스, 서브클래스 데이터
function useClassAndSubClassData({
  classDataList,
}: UseClassAndSubClassDataProps) {
  const { classId, subClassId } = useParams();

  const classData = useMemo(() => {
    return classDataList?.find(d => d.title === classId?.toUpperCase());
  }, [classDataList, classId]);
  const subClassData = useMemo(() => {
    return classData?.subClasses.find(
      d => d.orderNumber === Number(subClassId),
    );
  }, [classData, subClassId]);

  const isSubClassPage = !!classId && !!subClassId;

  return { classData, subClassData, isSubClassPage };
}

export default useClassAndSubClassData;
