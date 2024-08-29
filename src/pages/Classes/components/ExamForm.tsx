import DOMPurify from 'dompurify';
import Quill from 'quill';
import { FormEvent, useRef } from 'react';

import QuillEditor from '@/components/QuillEditor';
import { ExamInfo } from '@/types/classTypes';

function ExamForm({ examInfo }: { examInfo: ExamInfo }) {
  const { title, questions } = examInfo;
  const quillRefs = useRef<({ getQuill: () => Quill | null } | null)[]>([]);

  const setQuillRef =
    (index: number) => (el: { getQuill: () => Quill | null }) => {
      quillRefs.current[index] = el;
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    quillRefs.current.map((quillRef, index) => {
      const rawAnswer = quillRef?.getQuill()?.getSemanticHTML() || '';
      const clean = DOMPurify.sanitize(rawAnswer || '');
      console.log(index, 'rawAnswer: ', rawAnswer, ' / clean: ', clean);
      return null;
    });
  };

  return (
    <form
      className={
        'w-full h-max py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-30 self-center bg-neutral-100'
      }
      onSubmit={handleSubmit}
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
          <QuillEditor ref={setQuillRef(index)} placeholder={'답안 입력하기'} />
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
