import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useGetHomework from '@/hooks/homework/useGetHomework';
import HomeworkFormBody from '@/pages/Homework/components/HomeworkFormBody';
import HomeworkFormHeader from '@/pages/Homework/components/HomeworkFormHeader';
import HomeworkLoading from '@/pages/Homework/components/HomeworkLoading';
import useHomeworkForm from '@/pages/Homework/hooks/useHomeworkForm';

interface HomeworkFormProps {
  homeworkId: number;
}

function HomeworkForm({ homeworkId }: HomeworkFormProps) {
  const { data: homework, isLoading } = useGetHomework({ homeworkId });

  const { register, errors, reset, onSubmit, isPending } = useHomeworkForm({
    homeworkId,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  if (isLoading) {
    return <HomeworkLoading />;
  }

  if (!homework) {
    return (
      <div className='flex-col-center h-[500px] gap-10 py-120'>
        <p className='text-center'>과제 정보가 없습니다.</p>
        <Link
          to={'/'}
          className={
            'px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
          }
        >
          홈으로
        </Link>
      </div>
    );
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
        isPending={isPending}
      />
    </form>
  );
}

export default HomeworkForm;
