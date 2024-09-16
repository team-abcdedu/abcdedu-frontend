import { useEffect, useState } from 'react';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import Paperclip from '@/assets/icons/paperclip.svg?react';
import MessageModal from '@/components/MessageModal';
import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useModal from '@/hooks/useModal';
import ExamContent from '@/pages/Classes/components/ExamContent';
import { SubClassContentState } from '@/pages/Classes/types';
import useBoundStore from '@/stores';

function SubClassContent({ subClassId }: { subClassId: number }) {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-70 h-70 sm:w-90 sm:h-90 text-primary-300';
  const textStyle = 'text-20 sm:text-25 font-semibold text-center';

  const [modalMessage, setModalMessage] = useState('');
  const { isVisible, toggleModal } = useModal();

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [openExam, setOpenExam] = useState(false);
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

  const handleDownloadFile = (type: '이론' | '자료') => {
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
  }, [subClassId]);

  useEffect(() => {
    if (generalFile) {
      setFileUrl(generalFile.filePresignedUrl);
    }
    if (
      contentState.generalType === '이론' ||
      contentState.generalType === '자료'
    ) {
      const linkEle = document.createElement('a');
      linkEle.href = generalFile?.filePresignedUrl ?? '';
      linkEle.download = `${contentState.generalType}.pdf`;
      linkEle.click();
    }
  }, [generalFile, contentState]);

  return (
    <>
      <div
        className={
          'mt-0 mb-40 sm:mt-30 sm:mb-100 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50 '
        }
      >
        <button
          className={buttonStyle}
          onClick={() => handleDownloadFile('이론')}
        >
          <div className={iconWrapperStyle}>
            <Book className={iconStyle} />
          </div>
          <div className={textStyle}>이론</div>
        </button>

        <button
          className={buttonStyle}
          onClick={() => handleDownloadFile('자료')}
        >
          <div className={iconWrapperStyle}>
            <Paperclip className={iconStyle} />
          </div>
          <div className={textStyle}>자료</div>
        </button>

        <button className={buttonStyle} onClick={handleExamClick}>
          <div className={iconWrapperStyle}>
            <CheckToSlot className={iconStyle} />
          </div>
          <div className={textStyle}>시험</div>
        </button>
      </div>

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'error'}
        message={modalMessage}
      />
      {/* form exam */}
      {/* {openExam && examInfo && <ExamForm examInfo={examInfo} />} */}

      {/* pdf, hwp exam */}
      {openExam && (
        <ExamContent pdfUrl={fileUrl} pdfFileId={contentState.generalFileId} />
      )}
    </>
  );
}

export default SubClassContent;
