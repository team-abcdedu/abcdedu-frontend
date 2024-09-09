import { useEffect, useState } from 'react';

import { tableColumnMap, tableColumns } from '@/constants/adminTableColumns';
import useModal from '@/hooks/useModal';
import { SurveyTableData } from '@/types/admin';

import SurveyDetailModal from './SurveyDetailModal';

function SurveyTable() {
  const [data, setData] = useState<SurveyTableData[]>([]);
  const [selectedSurvey, setSelectedSurvey] = useState<SurveyTableData | null>(
    null,
  );
  const { isVisible, toggleModal } = useModal();

  const handleRowClick = (survey: SurveyTableData) => {
    setSelectedSurvey(survey);
    toggleModal();
  };

  // 임시
  useEffect(() => {
    setData([]);
  }, []);

  return (
    <>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {tableColumns.survey.map(column => (
              <th key={column} className={'font-medium'}>
                {tableColumnMap.survey[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(row => (
              <tr
                key={row.id}
                className={'cursor-pointer hover:bg-neutral-200'}
                onClick={() => handleRowClick({ ...row })}
              >
                {tableColumns.survey.map(column => (
                  <td key={column} className={'text-center'}>
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className={'text-center'}>
              <td>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <SurveyDetailModal
        survey={selectedSurvey}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default SurveyTable;
