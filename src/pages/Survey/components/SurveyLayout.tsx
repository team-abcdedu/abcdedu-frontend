import { Link } from 'react-router-dom';

import useSurvey from '@/hooks/survey/useSurvey';
import SurveyForm from '@/pages/Survey/components/SurveyForm';
import SurveyInfoSection from '@/pages/Survey/components/SurveyInfoSection';
import SurveyLoading from '@/pages/Survey/components/SurveyLoading';

interface SurveyLayoutProps {
  surveyId: number;
}

function SurveyLayout({ surveyId }: SurveyLayoutProps) {
  const { data: survey, isLoading } = useSurvey({ surveyId });

  if (isLoading) {
    return <SurveyLoading />;
  }

  if (!survey) {
    return (
      <div className='flex-col-center h-[500px] gap-10 py-120'>
        <p className='text-center'>설문 정보가 없습니다.</p>
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
    <div className={'w-full'}>
      <SurveyInfoSection
        title={survey.title}
        description={survey.description}
      />
      <SurveyForm surveyId={surveyId} questions={survey.questionGetResponses} />
    </div>
  );
}

export default SurveyLayout;
