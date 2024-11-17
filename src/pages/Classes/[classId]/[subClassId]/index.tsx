import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import Paperclip from '@/assets/icons/paperclip.svg?react';
import MessageModal from '@/components/MessageModal';
import useSubClassFileHandler from '@/hooks/class/useSubClassFileHandler';
import useSubClassFileInfoList from '@/hooks/class/useSubClassFileInfoList';
import useModal from '@/hooks/useModal';
import ExamContent from '@/pages/Classes/components/ExamContent';
import SubClassFileItem from '@/pages/Classes/components/SubClassFileItem';

function SubClass() {
  const iconStyle =
    'w-80 h-80 sm:w-85 sm:h-85 md:w-90 md:h-90 text-primary-300';

  const { classId, subClassId } = useParams();

  const { isVisible, toggleModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');
  const [openExamContent, setOpenExamContent] = useState(false);

  const {
    isLoading,
    isError,
    theoryFileInfo,
    documentFileInfo,
    examFileInfo,
    examPaperFileInfo,
  } = useSubClassFileInfoList({});

  const { hasAccessToTheoryFile, handleClick: handleTheoryBtnClick } =
    useSubClassFileHandler({ fileInfo: theoryFileInfo });
  const { handleClick: handleDocumentBtnClick } = useSubClassFileHandler({
    fileInfo: documentFileInfo,
  });

  const isExamContentExist = !!examFileInfo || !!examPaperFileInfo;

  const handleExamContentBtnClick = () => {
    if (!isExamContentExist) {
      setModalMessage('시험 파일이 없습니다.');
      toggleModal();
      return;
    }
    setOpenExamContent(prev => !prev);
  };

  useEffect(() => {
    setOpenExamContent(false);
  }, [classId, subClassId]);

  if (isLoading || isError) {
    return null;
  }

  return (
    <>
      <div
        className={
          'mt-0 mb-60 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50'
        }
      >
        {hasAccessToTheoryFile && theoryFileInfo && (
          <SubClassFileItem
            label={'이론'}
            onClick={() => handleTheoryBtnClick(setModalMessage, toggleModal)}
          >
            <Book className={iconStyle} />
          </SubClassFileItem>
        )}

        {documentFileInfo && (
          <SubClassFileItem
            label={'자료'}
            onClick={() => handleDocumentBtnClick(setModalMessage, toggleModal)}
          >
            <Paperclip className={iconStyle} />
          </SubClassFileItem>
        )}

        {isExamContentExist && (
          <SubClassFileItem label={'시험'} onClick={handleExamContentBtnClick}>
            <CheckToSlot className={iconStyle} />
          </SubClassFileItem>
        )}
      </div>

      {isExamContentExist && openExamContent && (
        <ExamContent
          examFileInfo={examFileInfo}
          examPaperFileInfo={examPaperFileInfo}
          setModalMessage={setModalMessage}
          toggleModal={toggleModal}
        />
      )}

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'error'}
        message={modalMessage}
      />
    </>
  );
}

export default SubClass;
