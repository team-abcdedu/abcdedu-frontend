import Head from '@/components/Head';
import SurveyForm from '@/pages/Survey/components/SurveyForm';

function Survey() {
  return (
    <div className={'flex flex-col mt-20'}>
      <Head title={'설문 | ABCDEdu'} />
      <SurveyForm surveyId={1} />
    </div>
  );
}

export default Survey;
