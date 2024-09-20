import { Link } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import { SurveySummary } from '@/types/survey';

interface SurveyListTableProps {
  surveyList: SurveySummary[];
  page: number;
  totalElements: number;
}

function SurveyListTable({
  surveyList,
  page,
  totalElements,
}: SurveyListTableProps) {
  const itemCountPerPage = 10;

  return (
    <div className='overflow-x-auto mt-30'>
      <table className='w-full text-sm sm:text-base table-auto'>
        <thead className={'max-sm:hidden'}>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='px-20 py-10'>작성자</th>
            <th className='px-20 py-10'>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {surveyList.map((survey, i) => (
            <tr
              key={survey.id}
              className='first:border-t border-b border-b-gray-400 hover:bg-gray-100'
            >
              <td className='max-sm:hidden px-20 py-10'>
                {totalElements - (page - 1) * itemCountPerPage - i}
              </td>
              <td className='max-sm:flex px-20 py-10'>
                <Link to={`/survey/${survey.id}`}>
                  <p className={'max-sm:text-start'}>{survey.title}</p>
                  <p className='sm:hidden text-12 font-light text-start text-neutral-500'>
                    {survey.writerName} | {survey.createAt.split('T')[0]}
                  </p>
                </Link>
              </td>
              <td className='max-sm:hidden px-20 py-10'>
                <Link to={`/survey/${survey.id}`}>{survey.writerName}</Link>
              </td>
              <td className='max-sm:hidden px-20 py-10'>
                {survey.createAt.split('T')[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
    </div>
  );
}

export default SurveyListTable;
