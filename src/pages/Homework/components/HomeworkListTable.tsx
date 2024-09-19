// import { useNavigate, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// import Pagination from '@/components/Pagination';
// import useGetSurveyList from '@/hooks/survey/useGetSurveyList';
import { mockHomeworkList } from '@/mock/homework';

function HomeworkListTable() {
  // const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();

  // const {
  //   list: surveyList,
  //   totalElements: surveyListLength,
  //   isError,
  //   isLoading,
  // } = useGetSurveyList({
  //   page,
  // });

  // if (isError || isLoading) {
  //   return (
  //     <div className={'w-full p-30 flex-row-center text-20'}>
  //       {isError && <div>에러가 발생했습니다.</div>}
  //       {isLoading && <div>로딩중...</div>}
  //     </div>
  //   );
  // }

  return (
    <div className='overflow-x-auto mt-30'>
      <table className='w-full text-sm sm:text-base'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='hidden md:table-cell px-20 py-10'>부제목</th>
          </tr>
        </thead>
        <tbody>
          {mockHomeworkList.map(homework => (
            <tr
              key={homework.id}
              className='space-x-5 border-b border-b-gray-400 cursor-pointer hover:bg-gray-100'
              onClick={() => navigate(`/homework/${homework.id}`)}
            >
              <td className='px-20 py-10'>
                <span>{homework.id}</span>
              </td>
              <td className='px-20 py-10'>
                <p>{homework.title}</p>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <p>{homework.subTitle}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination currentPage={page} totalElements={surveyListLength} /> */}
    </div>
  );
}

export default HomeworkListTable;
