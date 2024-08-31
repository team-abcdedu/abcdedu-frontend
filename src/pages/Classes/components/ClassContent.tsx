import { useState } from 'react';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';

import { examInfoMap } from '../constants/courseInfo';

import ExamForm from './ExamForm';

function ClassContent({ classCode }: { classCode: string }) {
  const buttonStyle =
    'min-w-100 min-h-[140px] flex flex-col justify-start items-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-90 h-90 text-primary-300';
  const textStyle = 'text-25 font-semibold text-center';
  const [openExam, setOpenExam] = useState(false);
  const examInfo = examInfoMap[classCode];

  const handleExamClick = () => {
    if (examInfo) {
      setOpenExam(!openExam);
    }
  };

  return (
    <>
      <div className={'mt-30 mb-100 flex-row-center gap-50 '}>
        <button className={buttonStyle}>
          <div className={iconWrapperStyle}>
            <Book className={iconStyle} />
          </div>
          <div className={textStyle}>이론</div>
        </button>
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

export default ClassContent;
