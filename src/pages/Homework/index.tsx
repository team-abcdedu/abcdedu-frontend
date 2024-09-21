import Head from '@/components/Head';
import HomeworkForm from '@/pages/Homework/components/HomeworkForm';

function Index() {
  return (
    <div className={'flex flex-col mt-20'}>
      <Head title={'과제 | ABCDEdu'} />
      <HomeworkForm homeworkId={1} />
    </div>
  );
}

export default Index;
