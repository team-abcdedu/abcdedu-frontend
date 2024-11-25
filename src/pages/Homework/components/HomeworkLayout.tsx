import { Link } from 'react-router-dom';

import useHomework from '@/hooks/homework/useHomework';
import HomeworkForm from '@/pages/Homework/components/HomeworkForm';
import HomeworkInfoSection from '@/pages/Homework/components/HomeworkInfoSection';
import HomeworkLoading from '@/pages/Homework/components/HomeworkLoading';

interface HomeworkLayoutProps {
  homeworkId: number;
}

function HomeworkLayout({ homeworkId }: HomeworkLayoutProps) {
  const { homework, isLoading } = useHomework({ homeworkId });

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
    <div className={'w-full h-full'}>
      <HomeworkInfoSection
        title={homework.title}
        description={homework.description}
        additionalDescription={homework.additionalDescription}
      />

      <HomeworkForm
        homeworkId={homeworkId}
        questions={homework.questionGetResponses}
      />
    </div>
  );
}

export default HomeworkLayout;
