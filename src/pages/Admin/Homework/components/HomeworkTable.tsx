import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useModal from '@/hooks/useModal';

import { homeworkTableColumns } from '../../constants';
import useHomeworkList from '../hooks/useHomeworkList';

import HomeworkFormatValue from './HomeworkFormatValue';
import RepliesDownloadModal from './RepliesDownloadModal';

function HomeworkTable() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { isVisible: downloadVisible, toggleModal: downloadToggle } =
    useModal();
  const [downloadHomeworkId, setDownloadHomeworkId] = useState<number | null>(
    null,
  );

  const { homeworkList, totalElements, isError, isLoading } = useHomeworkList({
    page,
  });

  const tableColStyle = (col: string) => {
    if (col === 'representative') return ' w-[15%]';
    if (col === 'id') return ' w-[10%]';
    if (col === 'title') return ' w-[35%]';
    if (col === 'writer') return ' w-[10%]';
    if (col === 'updatedDate') return ' w-[15%]';
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

  return (
    <>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr>
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
              <tr key={row.id} className={'hover:bg-neutral-200'}>
                {homeworkTableColumns.columnList.map(column => (
                  <td key={column} className={'text-center py-5 truncate'}>
                    {HomeworkFormatValue({
                      row,
                      column,
                      setDownloadHomeworkId,
                      downloadToggle,
                    })}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
      {downloadHomeworkId && (
        <RepliesDownloadModal
          homeworkId={downloadHomeworkId}
          isVisible={downloadVisible}
          onClose={downloadToggle}
        />
      )}
    </>
  );
}

export default HomeworkTable;
