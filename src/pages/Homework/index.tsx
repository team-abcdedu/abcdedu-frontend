import Head from '@/components/Head';
import HomeworkForm from '@/pages/Homework/components/HomeworkForm';

function Index() {
  return (
    <div className={'flex flex-col text-center mt-20'}>
      <Head title={'과제 | ABCDEdu'} />
      {/* <div className='py-30'> */}
      {/*  <p className='text-gray-400'>ABCDEdu</p> */}
      {/*  <h3 className='text-primary-400 text-30 font-bold'>과제</h3> */}
      {/* </div> */}
      {/* <HomeworkListTable /> */}
      <HomeworkForm homeworkId={1} />
    </div>
  );
}

export default Index;
