import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';

import SurveyDetailModal from './components/SurveyDetailModal';
import { tableColumnMap, tableColumns } from './constants';
import { SurveyTableData } from './types';

const mockData: SurveyTableData[] = [
  {
    id: '1',
    createdAt: '2021-10-01',
    class: '클래스1',
    name: '이름1',
  },
  {
    id: '2',
    createdAt: '2021-10-02',
    class: '클래스2',
    name: '이름2',
  },
];

const initialSurvey: SurveyTableData = {
  id: '',
  createdAt: '',
  class: '',
  name: '',
};

function Survey() {
  const [data, setData] = useState<SurveyTableData[]>([]);
  const [selectedSurvey, setSelectedSurvey] =
    useState<SurveyTableData>(initialSurvey);
  const { isVisible, toggleModal } = useModal();

  const handleRowClick = (survey: SurveyTableData) => {
    setSelectedSurvey(survey);
    toggleModal();
  };

  useEffect(() => {
    // 임시
    setData(mockData);
  }, []);

  return (
    <>
      <div className={'w-full h-full flex flex-col gap-20'}>
        <h1 className={'text-30 font-semibold'}>설문 관리</h1>
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
      </div>
      <SurveyDetailModal
        survey={selectedSurvey}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default Survey;
