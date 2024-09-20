import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useGetHomework from '@/hooks/homework/useGetHomework';
import AccessError from '@/pages/Homework/components/AccessError';
import HomeworkFormBody from '@/pages/Homework/components/HomeworkFormBody';
import HomeworkFormHeader from '@/pages/Homework/components/HomeworkFormHeader';
import useHomeworkForm from '@/pages/Homework/hooks/useHomeworkForm';

interface HomeworkFormProps {
  homeworkId: number;
}

function HomeworkForm({ homeworkId }: HomeworkFormProps) {
  const {
    data: homework,
    isLoading,
    isError,
    errorCode,
  } = useGetHomework({ homeworkId });

  const { register, errors, reset, onSubmit } = useHomeworkForm({
    homeworkId,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  if (errorCode === 401) {
    return <AccessError />;
  }

  if (isError || isLoading) {
    return (
      <div
        className={
          'w-full h-[300px] flex-col-center gap-10 text-center text-20'
        }
      >
        {isError ? '에러가 발생했습니다.' : '로딩중...'}
        {isError && (
          <Link
            to='/'
            className='px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
          >
            홈으로
          </Link>
        )}
      </div>
    );
  }

  if (!homework) {
    return null;
  }

  return (
    <form className={'w-full h-full'} onSubmit={onSubmit}>
      <HomeworkFormHeader
        title={homework.title}
        description={homework.description}
        additionalDescription={homework.additionalDescription}
      />

      <HomeworkFormBody
        questions={homework.questionGetResponses}
        register={register}
        errors={errors}
      />
    </form>
  );
}

export default HomeworkForm;
