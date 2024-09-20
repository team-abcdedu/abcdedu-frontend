import { Navigate, useParams } from 'react-router-dom';

import SurveyForm from '@/pages/Survey/components/SurveyForm';

function SurveyDetail() {
  const { surveyId } = useParams();

  if (!surveyId || Number.isNaN(Number(surveyId))) {
    alert('설문이 존재하지 않습니다.');
    return <Navigate to={`/survey`} replace />;
  }

  return <SurveyForm surveyId={Number(surveyId)} />;
}

export default SurveyDetail;
