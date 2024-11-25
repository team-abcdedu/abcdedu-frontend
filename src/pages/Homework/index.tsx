import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import Head from '@/components/Head';
import { ApiError } from '@/libs/errors';
import HomeworkLayout from '@/pages/Homework/components/HomeworkLayout';
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
        <HomeworkLayout homeworkId={1} />
      </ErrorBoundary>
    </div>
  );
}

export default Homework;
