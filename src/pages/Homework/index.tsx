import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import Head from '@/components/Head';
import HomeworkForm from '@/components/HomeworkForm';
import { ApiError } from '@/libs/errors';
import HomeworkFormLoading from '@/pages/Homework/components/HomeworkFormLoading';
import useBoundStore from '@/stores';

function Homework() {
  const { reset } = useQueryErrorResetBoundary();
  const user = useBoundStore(state => state.user);

  if (!user) {
    return (
      <AccessError
        type={'과제'}
        linkUrl={'/'}
        linkString={'홈으로'}
        error={{ status: 401 } as ApiError}
      />
    );
  }

  return (
    <div className={'flex flex-col mt-20'}>
      <Head title={'과제 | ABCDEdu'} />
      <ErrorBoundary
        accessErrorFallback={
          <AccessError type={'과제'} linkUrl={'/'} linkString={'홈으로'} />
        }
        onReset={reset}
      >
        <Suspense fallback={<HomeworkFormLoading />}>
          <HomeworkForm mode={'user-submit'} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Homework;
