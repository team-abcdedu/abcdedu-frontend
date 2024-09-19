import { Navigate, useParams } from 'react-router-dom';

import SurveyForm from '@/pages/Survey/components/SurveyForm';

function SurveyDetail() {
  const { surveyId } = useParams();

  if (!surveyId) {
    return <Navigate to={`/survey`} replace />;
  }

  return <SurveyForm surveyId={Number(surveyId)} />;
}

export default SurveyDetail;
