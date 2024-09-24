import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import { SubClassContentState } from '@/pages/Classes/types';
import useBoundStore from '@/stores';

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
  const {
    data: generalFile,
    isError: isFileError,
    errorMessage,
  } = useGetSubClassGeneralFile({
    assignmentFileId: contentState?.generalFileId,
  });

  const { user } = useBoundStore();

  const findFile = (type: string) => {
    return fileList?.find(file => file.assignmentType === type);
  };

  const handleDownloadFile = (type: '이론' | '자료') => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      setModalMessage('학생 이상만 이용 가능합니다.');
      toggleModal();
      return;
    }

    if (user?.role === '관리자' || (user?.role === '학생' && type === '자료')) {
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
      setOpenExam(false);
    } else {
      setModalMessage('관리자만 이용 가능합니다.');
      toggleModal();
    }
  };

  const handleExamClick = () => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      setModalMessage('학생 이상만 이용 가능합니다.');
      toggleModal();
      return;
    }

    const file = findFile('시험');
    if (!file) {
      setModalMessage('시험 정보가 없습니다.');
      toggleModal();
      return;
    }
    setContentState({
      generalType: '시험',
      generalFileId: file.assignmentFileId,
    });
    setOpenExam(prev => !prev);
  };

  useEffect(() => {
    setOpenExam(false);
  }, [subClassId, setOpenExam]);

  useEffect(() => {
    if (
      contentState.generalType === '이론' ||
      contentState.generalType === '자료'
    ) {
      if (isFileError) {
        setModalMessage(errorMessage);
        toggleModal();
        return;
      }
      // 파일 다운로드
      const newWindow = window.open(
        generalFile?.filePresignedUrl || '',
        '_self',
        'noopener,noreferrer',
      );

      if (newWindow) {
        newWindow.opener = null;
      }
    }
  }, [
    generalFile,
    contentState,
    isFileError,
    errorMessage,
    setModalMessage,
    toggleModal,
  ]);

  return { handleDownloadFile, handleExamClick, contentState, generalFile };
}

export default useFileHandler;
