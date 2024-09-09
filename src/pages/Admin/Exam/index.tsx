import { useEffect, useState } from 'react';

import { tableColumnMap, tableColumns } from '@/constants/adminTableColumns';
import useModal from '@/hooks/useModal';
import { ExamTableData } from '@/types/admin';

import ExamRegisterModal from './components/ExamRegisterModal';

function Index() {
  const [data, setData] = useState<ExamTableData[]>([]);
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    // 임시
    setData([]);
  }, []);

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>시험 관리</h1>
        <div className={'flex-row-center gap-30'}>
          <button
            onClick={toggleModal}
            className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
          >
            시험 파일 등록
          </button>
        </div>
      </div>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {tableColumns.exam.map(column => (
              <th key={column} className={'font-medium'}>
                {tableColumnMap.exam[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(row => (
              <tr key={row.id}>
                {tableColumns.exam.map(column => (
                  <td key={column} className={'text-center'}>
                    {column === 'pdf' || column === 'hwp' ? (
                      <a
                        href={row[column]}
                        target={'_blank'}
                        rel={'noreferrer noopener'}
                        className={'text-primary-300'}
                      >
                        파일 보기
                      </a>
                    ) : (
                      row[column]
                    )}
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
      <ExamRegisterModal isVisible={isVisible} onClose={toggleModal} />
    </div>
  );
}

export default Index;
