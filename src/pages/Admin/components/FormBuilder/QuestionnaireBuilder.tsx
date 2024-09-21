import { ChangeEvent, useEffect, useRef, useState } from 'react';

import QuestionnaireInput from './QuestionnaireInput';

interface QuestionnaireBuilderProps {
  deleteHandler: () => void;
  questionIdx: number;
}

function QuestionnaireBuilder({
  deleteHandler,
  questionIdx,
}: QuestionnaireBuilderProps) {
  const [type, setType] = useState<'radio' | 'checkbox' | 'textarea'>('radio');
  const questionRef = useRef<HTMLLIElement | null>(null);
  const textareaStyle =
    type === 'textarea' ? 'h-[calc(100%_-_5px)]' : 'h-[calc(100%_-_25px)]';

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as 'radio' | 'checkbox' | 'textarea');
  };

  useEffect(() => {
    if (questionRef && questionRef.current)
      questionRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [questionRef]);

  return (
    <li
      className={`w-full min-h-fit grid grid-cols-8 p-10 border-3 rounded-md gap-10 ${questionIdx % 2 ? 'bg-white' : 'bg-neutral-100'}`}
      ref={questionRef}
    >
      <div className={'w-full col-span-7 flex flex-col'}>
        <div className={'w-full grid grid-cols-7 justify-items-center py-3'}>
          <select
            name={`${questionIdx}-type`}
            onChange={handleTypeChange}
            className={'w-[80%] h-full text-center border-2 rounded-2xl'}
          >
            <option value={'radio'}>단일선택</option>
            <option value={'checkbox'}>다중선택</option>
            <option value={'textarea'}>서술형</option>
          </select>
          <div className={'w-full col-span-6 flex flex-col gap-2'}>
            <input
              name={`${questionIdx}-title`}
              className={'w-full py-3 px-10 border-2 rounded-md'}
              placeholder={'제목을 입력해주세요'}
              required
            />
            <textarea
              name={`${questionIdx}-description`}
              className={'w-full py-3 px-10 border-2 rounded-md'}
              placeholder={'설명을 입력해주세요'}
            />
          </div>
        </div>
        {type === 'radio' && (
          <QuestionnaireInput type={'radio'} questionIdx={questionIdx} />
        )}
        {type === 'checkbox' && (
          <QuestionnaireInput type={'checkbox'} questionIdx={questionIdx} />
        )}
        {type === 'textarea' && (
          <QuestionnaireInput type={'textarea'} questionIdx={questionIdx} />
        )}
      </div>

      <div className={'flex-col-center'}>
        <button
          type={'button'}
          onClick={deleteHandler}
          className={`${textareaStyle} w-[60%] border-2 rounded-lg text-red-700 font-bold bg-white`}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default QuestionnaireBuilder;
