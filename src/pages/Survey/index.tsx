import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import Head from '@/components/Head';
import { ApiError } from '@/libs/errors';
import SurveyLayout from '@/pages/Survey/components/SurveyLayout';
import useBoundStore from '@/stores';

function Survey() {
  const { reset } = useQueryErrorResetBoundary();
  const { surveyId } = useParams();
  const user = useBoundStore(state => state.user);

  if (!user) {
    return (
      <AccessError
        type={'설문'}
        linkUrl={'/'}
        linkString={'홈으로'}
        error={{ status: 401 } as ApiError}
      />
    );
  }

  return (
    <div className={'flex flex-col mt-20'}>
      <Head title={'설문 | ABCDEdu'} />
      <ErrorBoundary
        accessErrorFallback={
          <AccessError type={'설문'} linkUrl={'/'} linkString={'홈으로'} />
        }
        onReset={reset}
      >
        <SurveyLayout surveyId={Number(surveyId) || 1} />
      </ErrorBoundary>
    </div>
  );
}

export default Survey;
