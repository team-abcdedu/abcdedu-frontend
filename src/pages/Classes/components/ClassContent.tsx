import { useState } from 'react';

import Book from '@/assets/icons/book.svg?react';
import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import Edit from '@/assets/icons/edit.svg?react';
import TextBoxCheck from '@/assets/icons/text-box-check.svg?react';

import { assignmentInfoMap } from '../constants/assignmentInfo';
import { examInfoMap } from '../constants/courseInfo';

import AssignmentForm from './AssignmentForm';
import ExamForm from './ExamForm';
import SurveyForm from './SurveyForm';

function ClassContent({ classCode }: { classCode: string }) {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-70 h-70 sm:w-90 sm:h-90 text-primary-300';
  const textStyle = 'text-20 sm:text-25 font-semibold text-center';
  const [openExam, setOpenExam] = useState(false);
  const assingmentInfo = assignmentInfoMap[classCode];
  const examInfo = examInfoMap[classCode];

  const [openAssignment, setOpenAssignment] = useState(false);
  const [openSurvey, setOpenSurvey] = useState(false);

  const handleAssignmentClick = () => {
    if (assingmentInfo) {
      setOpenExam(false);
      setOpenSurvey(false);
      setOpenAssignment(!openAssignment);
    }
  };

  const handleExamClick = () => {
    if (examInfo) {
      setOpenAssignment(false);
      setOpenSurvey(false);
      setOpenExam(!openExam);
    }
  };

  const handleSurveyClick = () => {
    setOpenAssignment(false);
    setOpenExam(false);
    setOpenSurvey(!openSurvey);
  };

  return (
    <>
      <div
        className={
          'mt-0 mb-40 sm:mt-30 sm:mb-100 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50 '
        }
      >
        <button className={buttonStyle}>
          <div className={iconWrapperStyle}>
            <Book className={iconStyle} />
          </div>
          <div className={textStyle}>이론</div>
        </button>

        <button className={buttonStyle} onClick={handleAssignmentClick}>
          <div className={iconWrapperStyle}>
            <Edit className={iconStyle} />
          </div>
          <div className={textStyle}>과제</div>
        </button>

        <button className={buttonStyle} onClick={handleExamClick}>
          <div className={iconWrapperStyle}>
            <CheckToSlot className={iconStyle} />
          </div>
          <div className={textStyle}>시험</div>
        </button>

        <button className={buttonStyle} onClick={handleSurveyClick}>
          <div className={iconWrapperStyle}>
            <TextBoxCheck className={iconStyle} />
          </div>
          <div className={textStyle}>설문</div>
        </button>
      </div>

      {openExam && <ExamForm examInfo={examInfo} />}
      {openAssignment && (
        <AssignmentForm assignmentInfo={assingmentInfo} readOnly={true} />
      )}
      {openSurvey && <SurveyForm />}
    </>
  );
}

export default ClassContent;
