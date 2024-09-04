import { useEffect, useState } from 'react';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import useModal from '@/hooks/useModal';

import { examInfoMap } from '../constants';

import AccessDeniedModal from './AccessDeniedModal';
import ExamForm from './ExamForm';

function SubClassContent({
  subClassCode,
  subClassTitle,
}: {
  subClassCode: string;
  subClassTitle: string;
}) {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-70 h-70 sm:w-90 sm:h-90 text-primary-300';
  const textStyle = 'text-20 sm:text-25 font-semibold text-center';
  const examInfo = examInfoMap[subClassCode];

  const { isVisible, toggleModal } = useModal();

  const [openExam, setOpenExam] = useState(false);

  const handleTheoryClick = () => {
    // 권한 체크
    toggleModal();
  };

  const handleExamClick = () => {
    if (examInfo) {
      setOpenExam(prev => !prev);
    }
  };

  useEffect(() => {
    setOpenExam(false);
  }, [subClassCode, subClassTitle]);

  return (
    <>
      <div
        className={
          'mt-0 mb-40 sm:mt-30 sm:mb-100 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50 '
        }
      >
        <button className={buttonStyle} onClick={handleTheoryClick}>
          <div className={iconWrapperStyle}>
            <Book className={iconStyle} />
          </div>
          <div className={textStyle}>이론</div>
        </button>
        <AccessDeniedModal isVisible={isVisible} onClose={handleTheoryClick} />

        <button className={buttonStyle} onClick={handleExamClick}>
          <div className={iconWrapperStyle}>
            <CheckToSlot className={iconStyle} />
          </div>
          <div className={textStyle}>시험</div>
        </button>
      </div>

      {openExam && <ExamForm examInfo={examInfo} />}
    </>
  );
}

export default SubClassContent;
