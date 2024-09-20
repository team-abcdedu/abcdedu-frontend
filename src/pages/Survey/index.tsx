import { Link, useSearchParams } from 'react-router-dom';

import AccessError from '@/components/AccessError';
import Head from '@/components/Head';
import useGetSurveyList from '@/hooks/survey/useGetSurveyList';
import SurveyListTable from '@/pages/Survey/components/SurveyListTable';

function Survey() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const {
    list: surveyList,
    totalElements,
    isError,
    isLoading,
    errorCode,
  } = useGetSurveyList({
    page,
  });

  if (errorCode) {
    return (
      <AccessError
        type={'설문'}
        errorCode={errorCode}
        linkUrl={'/'}
        linkString={'홈으로'}
      />
    );
  }

  if (isError || isLoading) {
    return (
      <div
        className={
          'w-full h-[500px] flex-col-center gap-10 text-center text-18'
        }
      >
        {isError ? '에러가 발생했습니다.' : '로딩중...'}
        {isError && (
          <Link
            to='/'
            className='px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
          >
            홈으로
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className={'flex flex-col text-center mt-20'}>
      <Head title={'설문 | ABCDEdu'} />

      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu</p>
        <h3 className='text-primary-400 text-30 font-bold'>설문</h3>
      </div>

      <SurveyListTable
        surveyList={surveyList}
        page={page}
        totalElements={totalElements}
      />
    </div>
  );
}

export default Survey;
