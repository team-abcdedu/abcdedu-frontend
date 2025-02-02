import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useSubClassIdMap } from '@/pages/Classes/[classId]';
import ClassApi from '@/services/class';
import useBoundStore from '@/stores';
import { FileInfo } from '@/types/class';

interface UseSubClassFileInfoListProps {
  subClassId?: number;
}

function useSubClassFileInfoList({ subClassId }: UseSubClassFileInfoListProps) {
  const { classId: classIdParam, subClassId: subClassIdParam } = useParams();
  const subClassIdMap = useSubClassIdMap();

  let resolvedSubClassId;
  // 관리자 페이지 내에서 호출 시
  if (subClassId && !subClassIdMap) {
    resolvedSubClassId = subClassId;
  } else {
    resolvedSubClassId =
      subClassIdMap[`${classIdParam?.toUpperCase()}-${subClassIdParam}`];
  }

  const user = useBoundStore(state => state.user);

  const {
    data: subClassFileInfoList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['class', 'sub-class-file-list', resolvedSubClassId],
    queryFn: () => ClassApi.getSubClassFileList(resolvedSubClassId),
    enabled: !!resolvedSubClassId,
  });

  const findFileInfo = useMemo(() => {
    const cache: { [key: string]: FileInfo | undefined } = {};

    return (type: string) => {
      if (cache[type]) {
        return cache[type];
      }

      if (type === '이론' && user?.role !== '관리자') {
        cache[type] = undefined;
      } else {
        cache[type] = subClassFileInfoList?.find(
          file => file.assignmentType === type,
        );
      }

      return cache[type];
    };
  }, [subClassFileInfoList, user]);

  return {
    subClassFileInfoList,
    isLoading,
    isError,
    get theoryFileInfo() {
      return findFileInfo('이론');
    },
    get documentFileInfo() {
      return findFileInfo('자료');
    },
    get examFileInfo() {
      return findFileInfo('시험');
    },
    get examPaperFileInfo() {
      return findFileInfo('시험지');
    },
  };
}

export default useSubClassFileInfoList;
