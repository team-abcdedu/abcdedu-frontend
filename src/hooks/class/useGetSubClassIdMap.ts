import { useEffect, useState } from 'react';

import { ClassData, SubClassIdMap } from '@/types/class';

function useGetSubClassIdMap({ classes }: { classes: ClassData[] }) {
  const [subClassIdMap, setSubClassIdMap] = useState<SubClassIdMap>({});

  // ClassId-subClassOrderNumber 를 key 로, subClassId를 value 로 하는 객체를 만들어줍니다.
  useEffect(() => {
    if (classes) {
      const newObj: SubClassIdMap = {};
      classes?.forEach(c => {
        c.subClasses.forEach(sc => {
          newObj[`${c.title}-${sc.orderNumber}`] = Number(sc.subClassId);
        });
      });
      setSubClassIdMap(newObj);
    }
  }, [classes]);

  return subClassIdMap;
}

export default useGetSubClassIdMap;
