import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useSurveyList from '@/hooks/survey/useSurveyList';
import useModal from '@/hooks/useModal';
import SurveyRepliesViewModal from '@/pages/Admin/Survey/components/SurveyRepliesViewModal';

import { surveyTableColumns } from '../../constants';

function SurveyTable() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { isVisible, toggleModal } = useModal();
  const [selectedSurveyId, setSelectedSurveyId] = useState<number | null>(null);

  const { surveyList, totalElements, isError, isLoading } = useSurveyList({
    page,
  });

  const handleClickRow = (surveyId: number) => {
    setSelectedSurveyId(surveyId);
    toggleModal();
  };

  const tableColStyle = (col: string) => {
    if (col === 'id') return ' w-[15%]';
    if (col === 'title') return ' w-[40%]';
    if (col === 'createdAt') return ' w-[25%]';
    if (col === 'writerName') return ' w-[20%]';
  };

  const tableStatusMessages = () => {
    if (isError) {
      return '데이터를 불러오는 중 오류가 발생했습니다.';
    }
    if (isLoading) {
      return '데이터를 불러오는 중입니다.';
    }
    if (!isLoading && surveyList.length === 0) {
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
            {surveyTableColumns.columnList.map(column => (
              <th
                key={column}
                className={`font-medium py-5 ${tableColStyle(column)}`}
              >
                {surveyTableColumns.columnLabels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(isError ||
            isLoading ||
            (!isLoading && surveyList.length === 0)) && (
            <tr className={'text-center py-5'}>
              <td colSpan={4}>{tableStatusMessages()}</td>
            </tr>
          )}

          {surveyList &&
            surveyList.map(row => (
              <tr
                key={row.id}
                className={'cursor-pointer hover:bg-neutral-200'}
                onClick={() => handleClickRow(row.id)}
              >
                {surveyTableColumns.columnList.map(column => (
                  <td key={column} className={'text-center py-5 truncate'}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
      <SurveyRepliesViewModal
        surveyId={selectedSurveyId}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default SurveyTable;
