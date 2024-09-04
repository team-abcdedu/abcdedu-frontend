import { ChangeEvent, FormEvent, useState } from 'react';

import { subClassInfos, surveyInfo } from '../constants';

function SurveyItem({
  id,
  type,
  options,
  required,
}: {
  id: string;
  type: string;
  options: string[];
  required: boolean;
}) {
  if (type === 'textarea') {
    return (
      <textarea
        className={'min-h-[150px] p-6 font-normal'}
        placeholder={'답안 입력하기'}
        name={id}
        required={required}
      ></textarea>
    );
  }
  if (type === 'radio') {
    return (
      <fieldset className={'flex flex-col font-normal'}>
        {options.map(option => (
          <label key={option} className={'flex gap-10'}>
            <input type='radio' value={option} name={id} required={required} />
            {option}
          </label>
        ))}
      </fieldset>
    );
  }
  return null;
}

function RedDot() {
  return <span className={'font-bold text-red-500'}> *</span>;
}

function SurveyForm() {
  const [subClassName, setSubClassName] = useState('');
  const formTextStyle = 'text-16 md:text-20';

  const subClassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSubClassName(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.target as HTMLFormElement);
    // const formEntries = Array.from(formData.entries());
  };

  return (
    <form
      className={
        'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
      }
      onSubmit={submitHandler}
    >
      <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
        <div className={`w-full ${formTextStyle} font-semibold`}>
          <RedDot /> 표시는 필수 입력 항목입니다.
        </div>

        <fieldset className={'p-20 flex flex-col border-2 border-neutral-500'}>
          <legend
            className={`w-full ${formTextStyle} font-semibold text-center`}
          >
            본인이 수강한 수업을 선택해주세요. <RedDot />
          </legend>
          {subClassInfos.map(subClass => (
            <div key={subClass.id} className={'flex gap-10'}>
              <input
                type='radio'
                value={`${subClass.id}   ${subClass.title}`}
                onChange={subClassChangeHandler}
                id={`subClass${subClass.id}`}
                required
              />
              <label
                htmlFor={`subClass${subClass.id}`}
                className={'flex gap-20'}
              >
                <span>{subClass.id}</span>
                <span>{subClass.title}</span>
              </label>
            </div>
          ))}
        </fieldset>

        <div className={'w-full flex flex-col gap-10'}>
          <div className={`${formTextStyle} font-semibold`}>수강한 수업</div>
          <input
            className={`w-2/3 p-10 border-2 border-neutral-500 text-15 font-medium`}
            value={subClassName}
            readOnly
          />
        </div>

        <div className={'w-full mt-30 flex flex-col gap-40'}>
          {surveyInfo.map(q => (
            <label
              key={q.index}
              className={`w-full flex flex-col gap-20 ${formTextStyle} font-semibold`}
            >
              <span className={'whitespace-pre-wrap'}>
                {q.index ? `${q.index}.` : ``} {q.question}
                {q.required && <RedDot />}
              </span>
              <SurveyItem
                id={q.index}
                type={q.type}
                options={q.options || []}
                required={q.required}
              />
            </label>
          ))}
        </div>
        <button
          className={
            'min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] bg-primary-300'
          }
        >
          <span className={`${formTextStyle} text-white`}>제출하기</span>
        </button>
      </div>
    </form>
  );
}

export default SurveyForm;
