import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useSubClassIdMap } from '@/pages/Classes/[classId]';
import ClassApi from '@/services/class';
import useBoundStore from '@/stores';

interface UseGetSubClassFileInfoList {
  subLectureId?: number;
}

function useFetchSubClassFileList({
  subLectureId,
}: UseGetSubClassFileInfoList) {
  const { classId, subClassId } = useParams();
  const subClassIdMap = useSubClassIdMap();

  let resolvedSubLectureId;
  // 관리자 페이지 내에서 호출 시
  if (subLectureId && !subClassIdMap) {
    resolvedSubLectureId = subLectureId;
  }
  resolvedSubLectureId =
    subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`];

  const user = useBoundStore(state => state.user);

  const {
    data: subClassFileInfoList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['class', 'sub-class-file-list', resolvedSubLectureId],
    queryFn: () => ClassApi.getSubClassFileList(resolvedSubLectureId),
    enabled: !!resolvedSubLectureId,
  });

  const findFileInfo = useMemo(
    () => (type: string) => {
      if (type === '이론' && user?.role !== '관리자') {
        return undefined;
      }
      return subClassFileInfoList?.find(file => file.assignmentType === type);
    },
    [subClassFileInfoList, user],
  );

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

export default useFetchSubClassFileList;
