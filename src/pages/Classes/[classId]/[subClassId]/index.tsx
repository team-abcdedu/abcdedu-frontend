import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import Paperclip from '@/assets/icons/paperclip.svg?react';
import { useSubClassIdMap } from '@/components/ClassLayout';
import MessageModal from '@/components/MessageModal';
import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
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

  const { handleDownloadFile, handleExamClick, generalFile } = useFileHandler({
    subClassId: subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`],
    toggleModal,
    setModalMessage,
    setOpenExam,
  });

  const { data: fileList } = useGetSubClassFileList({
    subLectureId: subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`],
  });

  const [fileState, setFileState] = useState<{
    theory: boolean;
    data: boolean;
    exam: boolean;
  }>({
    theory: false,
    data: false,
    exam: false,
  });

  useEffect(() => {
    if (fileList) {
      setFileState({ theory: false, data: false, exam: false });
      fileList.forEach(file => {
        const { assignmentType } = file;
        if (assignmentType === '이론') {
          setFileState(prev => ({
            ...prev,
            theory: true,
          }));
        }
        if (assignmentType === '자료') {
          setFileState(prev => ({
            ...prev,
            data: true,
          }));
        }
        if (assignmentType === '시험') {
          setFileState(prev => ({
            ...prev,
            exam: true,
          }));
        }
      });
    }
  }, [fileList, classId, subClassId]);

  return (
    <>
      <div
        className={
          'mt-0 mb-60 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50'
        }
      >
        {fileState.theory && (
          <button
            className={buttonStyle}
            onClick={() => handleDownloadFile('이론')}
          >
            <div className={iconWrapperStyle}>
              <Book className={iconStyle} />
            </div>
            <div className={textStyle}>이론</div>
          </button>
        )}

        {fileState.data && (
          <button
            className={buttonStyle}
            onClick={() => handleDownloadFile('자료')}
          >
            <div className={iconWrapperStyle}>
              <Paperclip className={iconStyle} />
            </div>
            <div className={textStyle}>자료</div>
          </button>
        )}

        {fileState.exam && (
          <button className={buttonStyle} onClick={handleExamClick}>
            <div className={iconWrapperStyle}>
              <CheckToSlot className={iconStyle} />
            </div>
            <div className={textStyle}>시험</div>
          </button>
        )}
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
      {fileState.exam && openExam && (
        <ExamContent
          examFileUrl={generalFile?.filePresignedUrl}
          studentFileId={generalFile?.assignmentAnswerFileId}
        />
      )}
    </>
  );
}

export default SubClass;
