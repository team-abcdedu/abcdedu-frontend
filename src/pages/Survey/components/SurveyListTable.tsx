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
  return (
    <div className='overflow-x-auto mt-30'>
      <table className='w-full text-sm sm:text-base table-auto'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='hidden md:table-cell px-20 py-10'>작성자</th>
            <th className='hidden md:table-cell px-20 py-10'>작성시간</th>
          </tr>
        </thead>
        <tbody>
          {surveyList.map(survey => (
            <tr
              key={survey.id}
              className='space-x-5 border-b border-b-gray-400 cursor-pointer hover:bg-gray-100'
            >
              <td className='px-20 py-10'>
                <span>{survey.id}</span>
              </td>
              <td className='px-20 py-10'>
                <Link to={`/survey/${survey.id}`}>{survey.title}</Link>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/survey/${survey.id}`}>{survey.writerName}</Link>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <span>{survey.createAt.split('T')[0]}</span>
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
