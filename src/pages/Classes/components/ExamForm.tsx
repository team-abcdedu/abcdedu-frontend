import { ExamInfo } from '@/types/classTypes';

import Editor from './Editor';

function ExamForm({ examInfo }: { examInfo: ExamInfo }) {
  const { title, questions } = examInfo;
  return (
    <form
      className={
        'w-full h-max py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-30 self-center bg-neutral-100'
      }
    >
      <h2
        className={
          'min-w-[350px] md:min-w-[700px] text-40 font-bold text-center md:text-start'
        }
      >
        {title}
      </h2>
      {questions.map((question, index) => (
        <div
          key={question}
          className={
            'min-w-[350px] md:min-w-[700px] h-max flex flex-col gap-20'
          }
        >
          <div
            className={
              'pl-20 indent-[-20px] text-20 font-semibold whitespace-pre-wrap'
            }
          >
            {index + 1}. {question}
          </div>
          <Editor />
        </div>
      ))}
      <button
        type={'submit'}
        className={
          'min-w-150 min-h-50 px-16 py-8 text-20 text-white rounded-[10px] bg-primary-300 hover:bg-opacity-90 transition: background-color 0.2s;'
        }
      >
        제출하기
      </button>
    </form>
  );
}

export default ExamForm;
