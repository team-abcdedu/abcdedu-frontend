import { Link, useSearchParams } from 'react-router-dom';
import Head from '@/components/Head';
import Pagination from '@/components/Pagination';
import useSurveyList from '@/hooks/survey/useSurveyList';

function SurveyList() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { surveyList, totalElements, isLoading, isError } = useSurveyList({ page });

  return (
    <div className={'flex flex-col mt-20 gap-20 items-center'}>
      <Head title={'설문 목록 | ABCDEdu'} />
      {isError && <div>데이터를 불러오는 중 오류가 발생했습니다.</div>}
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      <ul className={'w-full flex flex-col gap-10'}>
        {surveyList.map(item => (
          <li key={item.id} className={'border-b pb-10'}>
            <Link to={`/survey/${item.id}`} className={'text-primary-400 underline'}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={page} totalElements={totalElements} />
    </div>
  );
}

export default SurveyList;
