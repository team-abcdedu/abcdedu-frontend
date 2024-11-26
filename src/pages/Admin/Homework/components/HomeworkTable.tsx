import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useHomework from '@/hooks/homework/useHomework';
import useModal from '@/hooks/useModal';
import HomeworkRepliesViewModal from '@/pages/Admin/Homework/components/HomeworkRepliesViewModal';

import { homeworkTableColumns } from '../../constants';

function HomeworkTable() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { isVisible, toggleModal } = useModal();
  const [selectedHomeworkId, setSelectedHomeworkId] = useState<number | null>(
    null,
  );

  const { homework, isLoading, isError } = useHomework({ homeworkId: 1 });
  const homeworkList = [{ ...homework, id: 1 }];

  const handleClickRow = (homeworkId: number) => {
    setSelectedHomeworkId(homeworkId);
    toggleModal();
  };

  const tableColStyle = (col: string) => {
    if (col === 'id') return ' w-[15%]';
    if (col === 'title') return ' w-[35%]';
    if (col === 'description') return ' w-[50%]';
  };

  const tableStatusMessages = () => {
    if (isError) {
      return '데이터를 불러오는 중 오류가 발생했습니다.';
    }
    if (isLoading) {
      return '데이터를 불러오는 중입니다.';
    }
    if (!isLoading && homeworkList.length === 0) {
      return '데이터가 없습니다.';
    }
  };

  return (
    <>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {homeworkTableColumns.columnList.map(column => (
              <th
                key={column}
                className={`font-medium py-5 ${tableColStyle(column)}`}
              >
                {homeworkTableColumns.columnLabels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(isError ||
            isLoading ||
            (!isLoading && homeworkList.length === 0)) && (
            <tr className={'text-center py-5'}>
              <td colSpan={4}>{tableStatusMessages()}</td>
            </tr>
          )}

          {homeworkList &&
            homeworkList.map(row => (
              <tr
                key={row.id}
                className={'cursor-pointer hover:bg-neutral-200'}
                onClick={() => handleClickRow(row.id)}
              >
                {homeworkTableColumns.columnList.map(column => (
                  <td key={column} className={'text-center py-5 truncate'}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={1} />
      <HomeworkRepliesViewModal
        homeworkId={selectedHomeworkId}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default HomeworkTable;
