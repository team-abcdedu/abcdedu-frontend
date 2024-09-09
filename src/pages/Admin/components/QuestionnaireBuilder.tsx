import { ChangeEvent, useEffect, useRef, useState } from 'react';

import QuestionnaireInput from '@/pages/Admin/components/QuestionnaireInput';

interface FlexibleInputProps {
  deleteHandler: () => void;
}

function QuestionnaireBuilder({ deleteHandler }: FlexibleInputProps) {
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
      className={
        'w-full min-h-fit flex justify-between p-10 border-3 rounded-md gap-10 bg-white'
      }
      ref={questionRef}
    >
      <div className={'w-full flex flex-col px-20'}>
        <div className={'w-full flex justify-between py-3'}>
          <select
            name={'question-type'}
            onChange={handleTypeChange}
            className={'w-[10%] text-center border-2 rounded-2xl'}
          >
            <option value={'radio'}>단일선택</option>
            <option value={'checkbox'}>다중선택</option>
            <option value={'textarea'}>서술형</option>
          </select>
          <textarea
            className={'w-[85%] h-full py-3 px-10 border-3 rounded-md'}
            placeholder={'질문을 입력해주세요'}
          />
        </div>
        {type === 'radio' && <QuestionnaireInput type={'radio'} />}
        {type === 'checkbox' && <QuestionnaireInput type={'checkbox'} />}
        {type === 'textarea' && <QuestionnaireInput type={'textarea'} />}
      </div>
      <button
        type={'button'}
        onClick={deleteHandler}
        className={`${textareaStyle} w-[50px] border-2 rounded-lg text-red-700 font-bold`}
      >
        X
      </button>
    </li>
  );
}

export default QuestionnaireBuilder;
