import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { v4 as uuidV4 } from 'uuid';

import FormErrorMessage from '@/components/FormErrorMessage';
import RequiredMark from '@/components/RequiredMark';
import { HomeworkInfo, IHomeworkForm } from '@/types/homework';

interface HomeworkFormMainProps {
  homework: HomeworkInfo | undefined;
  register: UseFormRegister<IHomeworkForm>;
  errors: FieldErrors<IHomeworkForm>;
  submitPending: boolean;
}

function HomeworkFormMain({
  homework,
  register,
  errors,
  submitPending,
}: HomeworkFormMainProps) {
  const formTextStyle = 'text-16 md:text-20';

  return (
    <div
      className={`w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100 ${formTextStyle}`}
    >
      <div
        className={'w-full min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}
      >
        <div className={`w-full font-semibold`}>
          <RequiredMark /> 표시는 필수 입력 항목입니다.
        </div>

        <div className={'py-30 flex flex-col gap-40'}>
          {homework?.questionGetResponses.map(question => (
            <label
              key={question.orderNumber}
              htmlFor={`question-${question.orderNumber}`}
              className={'w-full flex flex-col gap-30'}
            >
              <div className={`w-full flex flex-col gap-20`}>
                <p className={'font-semibold'}>
                  <span>{question.orderNumber}. </span>
                  {question.content}{' '}
                  {question.isAnswerRequired && <RequiredMark />}
                </p>
                <div className={'flex flex-col gap-10 font-light'}>
                  {question.additionalContent.split('\n').map(line => (
                    <p key={uuidV4()} className={'indent-[10px]'}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className={'w-full h-fit flex flex-col gap-10'}>
                <textarea
                  {...register(`${question.orderNumber}`, {
                    required: '답안을 입력해주세요.',
                  })}
                  id={`question-${question.orderNumber}`}
                  className={'w-full min-h-[150px] p-10 font-normal'}
                  placeholder={'답안 입력하기'}
                />
                {errors?.[`${question.orderNumber}`] && (
                  <FormErrorMessage
                    fieldErrors={
                      errors?.[`${question.orderNumber}`] as FieldError
                    }
                  />
                )}
              </div>
            </label>
          ))}
        </div>

        <div className={`w-full flex flex-col gap-20`}>
          <div className={'font-semibold'}>[토론 및 발표]</div>
          <p className={'indent-[10px] font-light'}>
            위에서 적은 내용을 친구들과 공유하고 토론해보자. 그리고 생각을
            가다듬고 정리해서 자신 있게 발표해보자.
          </p>
        </div>
        <button
          type={'submit'}
          className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] text-white bg-primary-400`}
          disabled={submitPending}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}

export default HomeworkFormMain;
