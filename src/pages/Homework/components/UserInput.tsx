import { UseFormRegister } from 'react-hook-form';

import { MyHomeworkAnswerInfo, QuestionInfo } from '@/types/homework';

interface UserInputAreaProps {
  question: QuestionInfo;
  answer: MyHomeworkAnswerInfo | null;
  register: UseFormRegister<{ [key: string]: string | string[] }>;
}

function UserInput({ question, answer, register }: UserInputAreaProps) {
  const inputTextStyle = answer ? 'text-neutral-300' : '';

  if (question.type === 'SUBJECTIVE') {
    return (
      <textarea
        {...register(`${question.index}`, { required: true })}
        className={`w-full min-h-[200px] max-h-[200px] p-10 ${inputTextStyle}`}
        placeholder={'답안을 입력해주세요'}
        defaultValue={answer?.content ?? ''}
        readOnly={!!answer}
      />
    );
  }

  if (question.type === 'SHORT_ANSWER') {
    return (
      <input
        {...register(`${question.index}`, { required: true })}
        className={`w-full p-10 ${inputTextStyle}`}
        placeholder={'답안을 입력해주세요'}
        defaultValue={answer?.content ?? ''}
        readOnly={!!answer}
      />
    );
  }

  if (question.type === 'MULTIPLE_OPTION') {
    return (
      <div className={'flex gap-20'}>
        {question.options?.map(option => (
          <label key={option.index} className={'flex gap-10 font-light'}>
            <input
              {...register(`${question.index}`, { required: true })}
              type={'checkbox'}
              value={option.index}
              disabled={!!answer}
              checked={answer?.optionIndexes?.includes(option.index)}
            />
            {option.content}
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'SINGLE_OPTION') {
    return (
      <div className={'flex gap-20'}>
        {question.options?.map(option => (
          <label key={option.index} className={'flex gap-10 font-light'}>
            <input
              {...register(`${question.index}`, { required: true })}
              type={'radio'}
              value={option.index}
              disabled={!!answer}
              defaultChecked={answer?.optionIndex === option.index}
            />
            {option.content}
          </label>
        ))}
      </div>
    );
  }
  return null;
}

export default UserInput;
