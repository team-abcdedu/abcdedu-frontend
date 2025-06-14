import { FieldError, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import FormErrorMessage from '@/components/FormErrorMessage';
import Loader from '@/components/Loader';
import { ApiError } from '@/libs/errors';
import SurveyFormItem from '@/pages/Survey/components/SurveyFormItem';
import useSurveyForm, { ISurveyForm } from '@/pages/Survey/hooks/useSurveyForm';
import useSurveyMutation from '@/pages/Survey/hooks/useSurveyMutation';
import { SurveyQuestion } from '@/types/survey';

function RedDot() {
  return (
    <span className={'font-bold text-red-500'} aria-label={'필수 항목'}>
      &nbsp;*
    </span>
  );
}

interface SurveyFormProps {
  surveyId: number;
  questions: SurveyQuestion[];
}

function SurveyForm({ surveyId, questions }: SurveyFormProps) {
  const navigate = useNavigate();

  const { register, errors, reset, handleSubmit } = useSurveyForm();
  const { mutation } = useSurveyMutation({ surveyId });

  const onSubmit: SubmitHandler<ISurveyForm> = data => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        alert('설문이 제출되었습니다.');
        navigate('/surveys');
      },
      onError: error => {
        alert(
          error instanceof ApiError
            ? error.message
            : '설문 제출 중 문제가 발생했습니다.',
        );
      },
    });
  };

  const formTextStyle = 'text-16 md:text-20';

  return (
    <div
      className={
        'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
      }
    >
      {mutation.isPending && <Loader />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'w-full md:min-w-[700px] flex flex-col gap-20'}
      >
        <div className={`w-full ${formTextStyle} font-semibold`}>
          <RedDot /> 표시는 필수 입력 항목입니다.
        </div>

        <div className={'w-full mt-30 flex flex-col gap-40'}>
          {questions.map(question => (
            <div
              key={question.orderNumber}
              className={`w-full flex flex-col gap-20 ${formTextStyle} font-semibold`}
            >
              <span className={'whitespace-pre-wrap'}>
                {question.orderNumber}. {question.content}
                {question.isAnswerRequired && <RedDot />}
              </span>
              <div className={'w-full h-full pl-10'}>
                <SurveyFormItem question={question} register={register} />
                {errors?.[`${question.orderNumber}#${question.type}`] && (
                  <FormErrorMessage
                    fieldErrors={
                      errors[
                        `${question.orderNumber}#${question.type}`
                      ] as FieldError
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] bg-primary-300 ${formTextStyle} text-white`}
          disabled={mutation.isPending}
        >
          제출하기
        </button>
      </form>
    </div>
  );
}

export default SurveyForm;
