import { FieldErrors, UseFormRegister } from 'react-hook-form';

import FormErrorMessage from '@/components/FormErrorMessage';

import { ICreateHomeworkFormValues } from '../../hooks/useCreateHomeworkForm';

import AutoResizeTextarea from './AutoResizeTextarea';

interface HomeworkDetailsProps {
  register: UseFormRegister<ICreateHomeworkFormValues>;
  errors: FieldErrors<ICreateHomeworkFormValues>;
}

function HomeworkDetails({ register, errors }: HomeworkDetailsProps) {
  return (
    <div
      className={
        'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center'
      }
    >
      <h1 className={'w-full text-30 md:text-50 font-bold text-primary-300'}>
        <AutoResizeTextarea
          {...register(`title`, { required: '과제 제목을 입력해주세요.' })}
          placeholder={'과제 제목(필수)'}
          customStyle={'text-center'}
        />
        {errors.title && (
          <FormErrorMessage fieldErrors={errors.title} size={'base'} />
        )}
      </h1>
      <h2 className={`w-full text-18 md:text-22 font-semibold`}>
        <AutoResizeTextarea
          {...register('description', {
            required: '과제에 대한 설명을 입력해주세요.',
          })}
          placeholder={'과제 설명(필수)'}
          customStyle={'text-center'}
        />
        {errors.description && (
          <FormErrorMessage fieldErrors={errors.description} size={'base'} />
        )}
      </h2>
      <h3 className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
        <AutoResizeTextarea
          {...register('additionalDescription')}
          placeholder={'과제 추가 설명'}
          customStyle={'text-center'}
        />
      </h3>
    </div>
  );
}

export default HomeworkDetails;
