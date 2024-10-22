import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import Head from '@/components/Head';
import { ApiError } from '@/libs/errors';
import SurveyForm from '@/pages/Survey/components/SurveyForm';
import useBoundStore from '@/stores';

function Survey() {
  const { reset } = useQueryErrorResetBoundary();
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
        <SurveyForm surveyId={1} />
      </ErrorBoundary>
    </div>
  );
}

export default Survey;
