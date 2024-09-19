import Head from '@/components/Head';
import SurveyListTable from '@/pages/Survey/components/SurveyListTable';

function Survey() {
  return (
    <div className={'flex flex-col text-center mt-20'}>
      <Head title={'설문 | ABCDEdu'} />
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>설문</h3>
      </div>
      <SurveyListTable />
    </div>
  );
}

export default Survey;
