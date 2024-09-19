import { UseFormRegister } from 'react-hook-form';

import { ISurveyForm } from '@/pages/Survey/hooks/useSurveyForm';
import { SurveyQuestion } from '@/types/survey';

function SurveyFormItem({
  question,
  register,
}: {
  question: SurveyQuestion;
  register: UseFormRegister<ISurveyForm>;
}) {
  const { orderNumber, type, choices, isAnswerRequired } = question;

  const rules = isAnswerRequired ? { required: '답안을 입력해주세요.' } : {};

  if (type === 'ESSAY') {
    return (
      <textarea
        {...register(`${orderNumber}#${type}`, rules)}
        className={'w-full min-h-[150px] p-6 font-normal'}
        placeholder={'답안 입력하기'}
      ></textarea>
    );
  }
  if (type === 'CHOICE' && choices) {
    return (
      <fieldset className={'flex flex-col font-normal gap-5'}>
        {choices.map(option => (
          <label key={option.orderNumber} className={'flex gap-10'}>
            <input
              {...register(`${orderNumber}#${type}`, rules)}
              type='radio'
              value={option.orderNumber}
            />
            <span className={'text-17'}>{option.description}</span>
          </label>
        ))}
      </fieldset>
    );
  }
  return null;
}

export default SurveyFormItem;
