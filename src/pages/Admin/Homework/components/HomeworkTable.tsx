import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useHomeworkList from '@/hooks/homework/useHomeworkList';
import useModal from '@/hooks/useModal';
import RepliesDownloadModal from '@/pages/Admin/Homework/components/RepliesDownloadModal';
import { HomeworkSummary } from '@/types/homework';
import { formatDate } from '@/utils/formatDate';

import { homeworkTableColumns } from '../../constants';

function HomeworkTable() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { isVisible: downloadVisible, toggleModal: downloadToggle } =
    useModal();
  const [selectedHomeworkId, setSelectedHomeworkId] = useState<number | null>(
    null,
  );

  const { homeworkList, totalElements, isError, isLoading } = useHomeworkList({
    page,
  });

  const tableColStyle = (col: string) => {
    if (col === 'id') return ' w-[10%]';
    if (col === 'title') return ' w-[35%]';
    if (col === 'writer') return ' w-[15%]';
    if (col === 'updatedDate') return ' w-[20%]';
    if (col === 'repliesDownload') return ' w-[15%]';
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

  const formatValue = (
    row: HomeworkSummary,
    column: keyof HomeworkSummary | 'repliesDownload',
  ) => {
    if (column === 'repliesDownload') {
      const handleClick = () => {
        setSelectedHomeworkId(row.id);
        downloadToggle();
      };

      return (
        <button
          type={'button'}
          className={'py-5 px-10 border-1 rounded border-black'}
          onClick={handleClick}
        >
          다운로드
        </button>
      );
    }
    if (column === 'updatedDate') {
      return formatDate(row[column], true);
    }
    return row[column];
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
              <td colSpan={5}>{tableStatusMessages()}</td>
            </tr>
          )}

          {homeworkList &&
            homeworkList.map(row => (
              <tr
                key={row.id}
                className={'hover:bg-neutral-200'}
                // onClick={() => handleClickRow(row.id)}
              >
                {homeworkTableColumns.columnList.map(column => (
                  <td key={column} className={'text-center py-5 truncate'}>
                    {formatValue(row, column)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
      {selectedHomeworkId && (
        <RepliesDownloadModal
          homeworkId={selectedHomeworkId}
          isVisible={downloadVisible}
          onClose={downloadToggle}
        />
      )}
    </>
  );
}

export default HomeworkTable;
