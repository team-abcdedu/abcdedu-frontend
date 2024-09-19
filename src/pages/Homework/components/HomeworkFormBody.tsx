import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IHomeworkForm } from '@/pages/Homework/hooks/useHomeworkForm';
import { HomeworkQuestion } from '@/types/homework';

function RedDot() {
  return <span className={'font-bold text-red-500'}>&nbsp;*</span>;
}

interface HomeworkFormBodyProps {
  questions: HomeworkQuestion[];
  register: UseFormRegister<IHomeworkForm>;
  errors: FieldErrors<IHomeworkForm>;
}

function HomeworkFormBody({
  questions,
  register,
  errors,
}: HomeworkFormBodyProps) {
  const formTextStyle = 'text-16 md:text-20 whitespace-pre-wrap';

  return (
    <div
      className={`w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100 ${formTextStyle}`}
    >
      <div
        className={'w-full min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}
      >
        <div className={`w-full ${formTextStyle} font-semibold`}>
          <RedDot /> 표시는 필수 입력 항목입니다.
        </div>

        <div className={'py-30 flex flex-col gap-40'}>
          {questions.map(question => (
            <div
              key={question.orderNumber}
              className={'w-full flex flex-col gap-30'}
            >
              <div className={`w-full flex flex-col gap-20`}>
                <div className={'font-semibold'}>
                  {question.orderNumber}. {question.content}{' '}
                  {question.isAnswerRequired && <RedDot />}
                </div>
                <div className={'pl-10'}>{question.content}</div>
              </div>
              <textarea
                {...register(`${question.orderNumber}`, {
                  required: '답안을 입력해주세요.',
                })}
                className={'w-full min-h-[150px] p-6 font-normal'}
                placeholder={'답안 입력하기'}
              />
              {errors?.[`${question.orderNumber}`] && (
                <span className={'text-14 text-red-700'}>
                  {errors?.[`${question.orderNumber}`]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className={`w-full flex flex-col gap-20`}>
          <div className={'font-semibold'}>[토론 및 발표]</div>
          <p className={'indent-[20px] whitespace-pre-wrap'}>
            위에서 적은 내용을 친구들과 공유하고 토론해보자. 그리고 생각을
            가다듬고 정리해서 자신 있게 발표해보자.
          </p>
        </div>

        <button
          className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] text-white bg-primary-400`}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}

export default HomeworkFormBody;
