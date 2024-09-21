import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import { SubClassContentState } from '@/pages/Classes/types';
import useBoundStore from '@/stores';
import { getFileName } from '@/utils/getFileName';

interface UseFileHandlerProps {
  subClassId: number;
  toggleModal: () => void;
  setModalMessage: (message: string) => void;
  setOpenExam: Dispatch<SetStateAction<boolean>>;
}

function useFileHandler({
  subClassId,
  toggleModal,
  setModalMessage,
  setOpenExam,
}: UseFileHandlerProps) {
  const [contentState, setContentState] = useState<SubClassContentState>({
    generalType: null,
    generalFileId: null,
  });

  const { data: fileList } = useGetSubClassFileList({
    subLectureId: subClassId,
  });
  const { data: generalFile } = useGetSubClassGeneralFile({
    assignmentFileId: contentState?.generalFileId,
  });

  const { user } = useBoundStore();

  const findFile = (type: string) => {
    return fileList?.find(file => file.assignmentType === type);
  };

  const handleDownloadFile = (type: 'THEORY' | 'DATA') => {
    if (user?.role === '관리자') {
      const file = findFile(type);
      if (!file) {
        setModalMessage(`${type} 파일이 없습니다.`);
        toggleModal();
        return;
      }
      setContentState({
        generalType: type,
        generalFileId: file.assignmentFileId,
      });
    } else {
      setModalMessage('관리자만 이용 가능합니다.');
      toggleModal();
    }
  };

  const handleExamClick = () => {
    const file = findFile('EXAM');
    if (!file) {
      setModalMessage('시험 정보가 없습니다.');
      toggleModal();
      return;
    }
    setContentState({
      generalType: 'EXAM',
      generalFileId: file.assignmentFileId,
    });
    setOpenExam(prev => !prev);
  };

  useEffect(() => {
    setOpenExam(false);
  }, [subClassId, setOpenExam]);

  useEffect(() => {
    if (
      contentState.generalType === 'THEORY' ||
      contentState.generalType === 'DATA'
    ) {
      // 파일 다운로드
      const linkEle = document.createElement('a');
      linkEle.href = generalFile?.filePresignedUrl ?? '';
      linkEle.download = getFileName(generalFile?.filePresignedUrl ?? '') ?? '';
      linkEle.click();
    }
  }, [generalFile, contentState]);

  return { handleDownloadFile, handleExamClick, contentState, generalFile };
}

export default useFileHandler;
