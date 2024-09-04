import { UseFormRegister } from 'react-hook-form';

import { FormValues } from '@/types/classForm';

function SurveyItem({
  id,
  type,
  options,
  register,
  required,
}: {
  id: string;
  type: string;
  options: string[];
  required: boolean;
  register: UseFormRegister<FormValues>;
}) {
  if (type === 'textarea') {
    return required ? (
      <textarea
        {...register(`answers.${id}`, {
          required: '답안을 입력해주세요.',
        })}
        className={'min-h-[150px] p-6 font-normal'}
        placeholder={'답안 입력하기'}
      ></textarea>
    ) : (
      <textarea
        {...register(`answers.${id}`)}
        className={'min-h-[150px] p-6 font-normal'}
        placeholder={'답안 입력하기'}
      ></textarea>
    );
  }
  if (type === 'radio') {
    return required ? (
      <fieldset className={'flex flex-col font-normal'}>
        {options.map(option => (
          <label key={option} className={'flex gap-10'}>
            <input
              {...register(`answers.${id}`, {
                required: '답안을 입력해주세요',
              })}
              type='radio'
              value={option}
            />
            {option}
          </label>
        ))}
      </fieldset>
    ) : (
      <fieldset className={'flex flex-col font-normal'}>
        {options.map(option => (
          <label key={option} className={'flex gap-10'}>
            <input {...register(`answers.${id}`)} type='radio' value={option} />
            {option}
          </label>
        ))}
      </fieldset>
    );
  }
  return null;
}

export default SurveyItem;
