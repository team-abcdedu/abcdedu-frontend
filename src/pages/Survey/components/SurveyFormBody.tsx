import { FieldErrors, UseFormRegister } from 'react-hook-form';

import SurveyFormItem from '@/pages/Survey/components/SurveyFormItem';
import { ISurveyForm } from '@/pages/Survey/hooks/useSurveyForm';
import { SurveyQuestion } from '@/types/survey';

function RedDot() {
  return (
    <span className={'font-bold text-red-500'} aria-label={'필수 항목'}>
      &nbsp;*
    </span>
  );
}

interface SurveyFormBodyProps {
  questions: SurveyQuestion[];
  register: UseFormRegister<ISurveyForm>;
  errors: FieldErrors<ISurveyForm>;
}

function SurveyFormBody({ questions, register, errors }: SurveyFormBodyProps) {
  const formTextStyle = 'text-16 md:text-20';

  return (
    <div
      className={
        'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
      }
    >
      <div className={'w-full md:min-w-[700px] flex flex-col gap-20'}>
        <div className={`w-full ${formTextStyle} font-semibold`}>
          <RedDot /> 표시는 필수 입력 항목입니다.
        </div>

        <div className={'w-full mt-30 flex flex-col gap-40'}>
          {questions.map(question => (
            <div key={question.orderNumber}>
              <div
                className={`w-full flex flex-col gap-20 ${formTextStyle} font-semibold`}
              >
                <span className={'whitespace-pre-wrap'}>
                  {question.orderNumber}. {question.content}
                  {question.isAnswerRequired && <RedDot />}
                </span>
                <div className={'w-full h-full pl-10'}>
                  <SurveyFormItem question={question} register={register} />
                  {errors?.[`${question.orderNumber}#${question.type}`] && (
                    <span
                      className={'text-14 text-red-500'}
                      role={'alert'}
                      aria-live={'assertive'}
                    >
                      {
                        errors?.[`${question.orderNumber}#${question.type}`]
                          ?.message
                      }
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] bg-primary-300 ${formTextStyle} text-white`}
        >
          제출하기
        </button>
      </div>
    </div>
  );
}

export default SurveyFormBody;
