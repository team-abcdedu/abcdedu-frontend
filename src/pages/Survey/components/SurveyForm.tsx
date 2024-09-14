import { ChangeEvent, useState } from 'react';

import MessageModal from '@/components/MessageModal';
import useClassForm from '@/hooks/useClassForm';
import useModal from '@/hooks/useModal';

import { subClassInfos, surveyInfo } from '../constants';

import SurveyItem from './SurveyItem';

function RedDot() {
  return <span className={'font-bold text-red-500'}> *</span>;
}

function SurveyForm() {
  const [subClassName, setSubClassName] = useState('');
  const formTextStyle = 'text-16 md:text-20';
  const { isVisible, toggleModal } = useModal();
  const { register, onSubmit, errors } = useClassForm({
    type: 'survey',
    toggleModal,
  });

  const subClassChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSubClassName(e.target.value);
  };

  return (
    <>
      <form
        className={
          'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
        }
        onSubmit={onSubmit}
      >
        <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
          <div className={`w-full ${formTextStyle} font-semibold`}>
            <RedDot /> 표시는 필수 입력 항목입니다.
          </div>

          <fieldset
            className={'p-20 flex flex-col border-2 border-neutral-500'}
          >
            <legend
              className={`w-full ${formTextStyle} font-semibold text-center`}
            >
              본인이 수강한 수업을 선택해주세요. <RedDot />
            </legend>
            {subClassInfos.map(subClass => (
              <div key={subClass.id} className={'flex gap-10'}>
                <input
                  {...register('answers.subClass', {
                    required: '답안을 입력해주세요.',
                  })}
                  type='radio'
                  value={`${subClass.id}   ${subClass.title}`}
                  onChange={subClassChangeHandler}
                  id={`subClass${subClass.id}`}
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
          {errors.answers?.subClass && (
            <span className={'text-red-500 text-16'}>
              {errors.answers?.subClass?.message}
            </span>
          )}
          <div className={'w-full flex flex-col gap-10'}>
            <div className={`${formTextStyle} font-semibold`}>수강한 수업</div>
            <input
              className={`w-2/3 p-10 border-2 border-neutral-500 text-15 font-medium`}
              value={subClassName}
              readOnly
            />
          </div>

          <div className={'w-full mt-30 flex flex-col gap-40'}>
            {surveyInfo.map((q, qIndex) => (
              <div key={q.index}>
                <label
                  className={`w-full flex flex-col gap-20 ${formTextStyle} font-semibold`}
                >
                  <span className={'whitespace-pre-wrap'}>
                    {q.index ? `${q.index}.` : ``} {q.question}
                    {q.required && <RedDot />}
                  </span>
                  <SurveyItem
                    id={qIndex.toString()}
                    type={q.type}
                    options={q.options || []}
                    register={register}
                    required={q.required}
                  />
                </label>
                {errors.answers?.[`${qIndex}`] && (
                  <span className={'text-red-500 text-16'}>
                    {errors.answers?.[`${qIndex}`]?.message}
                  </span>
                )}
              </div>
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
      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'success'}
        message={'제출되었습니다.'}
      />
    </>
  );
}

export default SurveyForm;
