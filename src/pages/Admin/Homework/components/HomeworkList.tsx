import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useGetHomeworkList from '@/hooks/homework/useGetHomeworkList';

import { homeworkTableColumns } from '../../constants';

function HomeworkList() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { list, totalElements } = useGetHomeworkList({
    page,
  });

  // if (isError || isLoading) {
  //   return <div>{isError ? '에러가 발생했습니다.' : '로딩 중입니다.'}</div>;
  // }

  return (
    <div>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {homeworkTableColumns.columnList.map(column => (
              <th key={column} className={'font-medium'}>
                {homeworkTableColumns.columnLabels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map(row => (
              <tr
                key={row.id}
                className={'cursor-pointer hover:bg-neutral-200'}
              >
                {homeworkTableColumns.columnList.map(column => (
                  <td key={column} className={'text-center'}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className={'text-center'}>
              <td colSpan={3}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
    </div>
  );
}

export default HomeworkList;
