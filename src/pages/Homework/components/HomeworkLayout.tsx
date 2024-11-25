import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useHomework from '@/hooks/homework/useHomework';
import HomeworkFormBody from '@/pages/Homework/components/HomeworkFormBody';
import HomeworkInfoSection from '@/pages/Homework/components/HomeworkInfoSection';
import HomeworkLoading from '@/pages/Homework/components/HomeworkLoading';
import useHomeworkForm from '@/pages/Homework/hooks/useHomeworkForm';

interface HomeworkLayoutProps {
  homeworkId: number;
}

function HomeworkLayout({ homeworkId }: HomeworkLayoutProps) {
  const { homework, isLoading } = useHomework({ homeworkId });

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
      <HomeworkInfoSection
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

export default HomeworkLayout;
