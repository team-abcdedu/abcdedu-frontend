import { useEffect, useRef, useState } from 'react';
import {
  Control,
  FieldError,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from 'react-hook-form';

import FormErrorMessage from '@/components/FormErrorMessage';

import { ICreateHomeworkFormValues } from '../../hooks/useCreateHomeworkForm';

import AutoResizeTextarea from './AutoResizeTextarea';

interface HomeworkQuestionsProps {
  register: UseFormRegister<ICreateHomeworkFormValues>;
  control: Control<ICreateHomeworkFormValues>;
  errors: FieldErrors<ICreateHomeworkFormValues>;
}

function HomeworkQuestions({
  register,
  control,
  errors,
}: HomeworkQuestionsProps) {
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: 'questions',
  });

  const divArrayRef = useRef<HTMLDivElement[]>([]);
  const [curDivIdx, setCurDivIdx] = useState<number>(0);

  useEffect(() => {
    if (divArrayRef.current.length > 1) {
      divArrayRef.current[curDivIdx].scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  }, [curDivIdx]);

  return (
    <div className={'py-30 flex flex-col gap-40'}>
      {fields.map((item, index) => {
        return (
          <div
            key={item.id}
            className={'w-full flex flex-col gap-30'}
            ref={ref => {
              if (ref) {
                divArrayRef.current[index] = ref;
              }
            }}
            tabIndex={index}
          >
            <div className={`w-full flex flex-col gap-20`}>
              <div className={'w-full flex font-semibold'}>
                <span>{index + 1}. </span>
                <div className={'w-full flex flex-col gap-5'}>
                  <AutoResizeTextarea
                    {...register(`questions.${index}.content`, {
                      required: '질문을 입력해주세요.',
                    })}
                    placeholder={'질문(필수)'}
                  />
                  {errors.questions?.[`${index}`]?.content && (
                    <FormErrorMessage
                      fieldErrors={
                        errors.questions?.[`${index}`]?.content as FieldError
                      }
                    />
                  )}
                </div>
              </div>
              <AutoResizeTextarea
                {...register(`questions.${index}.additionalContent`)}
                placeholder={
                  '추가 설명(줄바꿈 시 실제 화면에서는 들여쓰기가 적용됩니다)'
                }
                customStyle={'font-light'}
              />
            </div>
            <div className={`flex-row-center gap-10`}>
              <label
                htmlFor={`${index}-question-required`}
                className={'text-black'}
              >
                답변 필수
              </label>
              <input
                {...register(`questions.${index}.isAnswerRequired` as const)}
                id={`${index}-question-required`}
                type={'checkbox'}
                className={'accent-red-500 scale-150'}
              />
            </div>
            <div className={`w-full flex-row-center text-white`}>
              {fields.length > 1 && (
                <button
                  className={'border-1 w-1/3 p-10 bg-primary-100'}
                  onClick={() => {
                    remove(index);
                    setCurDivIdx(index);
                  }}
                >
                  {index + 1}번 질문 삭제
                </button>
              )}
              <button
                className={'border-1 w-1/3 p-10 bg-primary-200'}
                onClick={() => {
                  if (fields.length === index + 1) {
                    append({
                      content: '',
                      isAnswerRequired: false,
                      additionalContent: '',
                    });
                  } else {
                    insert(index + 1, {
                      content: '',
                      isAnswerRequired: false,
                      additionalContent: '',
                    });
                  }
                  setCurDivIdx(index + 1);
                }}
              >
                질문 추가
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeworkQuestions;
