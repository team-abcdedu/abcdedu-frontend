import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import Paperclip from '@/assets/icons/paperclip.svg?react';
import { useSubClassIdMap } from '@/components/ClassLayout';
import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import ExamContent from '@/pages/Classes/components/ExamContent';
import useFileHandler from '@/pages/Classes/hooks/useFileHandler';

function SubClass() {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-70 h-70 sm:w-90 sm:h-90 text-primary-300';
  const textStyle = 'text-20 sm:text-25 font-semibold text-center';

  const { classId, subClassId } = useParams();
  const subClassIdMap = useSubClassIdMap();

  const { isVisible, toggleModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');
  const [openExam, setOpenExam] = useState(false);

  const { handleDownloadFile, handleExamClick, contentState, generalFile } =
    useFileHandler({
      subClassId: subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`],
      toggleModal,
      setModalMessage,
      setOpenExam,
    });

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
        <ExamContent
          pdfUrl={generalFile?.filePresignedUrl}
          pdfFileId={contentState.generalFileId}
        />
      )}
    </>
  );
}

export default SubClass;
