// import DOMPurify from 'dompurify';
import Quill from 'quill';
import { FormEvent, useRef } from 'react';

import QuillEditor from '@/components/QuillEditor';
import { ExamInfo } from '@/types/classTypes';
import base64ToFile from '@/utils/base64ToFile';

function ExamForm({ examInfo }: { examInfo: ExamInfo }) {
  const { title, questions } = examInfo;
  const quillRefs = useRef<({ getQuill: () => Quill | null } | null)[]>([]);

  const setQuillRef =
    (index: number) => (el: { getQuill: () => Quill | null }) => {
      quillRefs.current[index] = el;
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    quillRefs.current.map(async (quillRef, index) => {
      const rawAnswer = quillRef?.getQuill()?.getSemanticHTML() || '';

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = rawAnswer;
      const imgTags = tempDiv.getElementsByTagName('img');

      const imgPromises = Array.from(imgTags).map(async (imgTag, imgIndex) => {
        return base64ToFile(imgTag.src, `image${imgIndex}.webp`);
      });

      const imgFiles = await Promise.all(imgPromises);
      console.log(index, '답변', rawAnswer);
      console.log(index, '이미지 파일', imgFiles);
      // 이미지 파일들 서버로 전송하고 응답받은 이미지 URL로 교체

      // const clean = DOMPurify.sanitize(rawAnswer || '');
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
