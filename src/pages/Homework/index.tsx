import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import Head from '@/components/Head';
import HomeworkForm from '@/pages/Homework/components/HomeworkForm';

function Homework() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className={'flex flex-col mt-20'}>
      <Head title={'과제 | ABCDEdu'} />
      <ErrorBoundary
        accessErrorFallback={
          <AccessError type={'과제'} linkUrl={'/'} linkString={'홈으로'} />
        }
        onReset={reset}
      >
        <HomeworkForm homeworkId={1} />
      </ErrorBoundary>
    </div>
  );
}

export default Homework;
