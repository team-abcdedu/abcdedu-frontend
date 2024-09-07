import { useEffect, useState } from 'react';

import { tableColumnMap, tableColumns } from './constants';
import { TheoryTableData } from './types';

const mockData: TheoryTableData[] = [
  {
    id: '1',
    class: 'A-1',
    file: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    id: '2',
    class: 'A-2',
    file: 'https://picsum.photos/200/300?grayscale',
  },
];

function Theory() {
  const [data, setData] = useState<TheoryTableData[]>([]);

  useEffect(() => {
    // 임시
    setData(mockData);
  }, []);

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>이론 관리</h1>
        <div className={'flex-row-center gap-30'}>
          <button
            className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
          >
            이론 파일 등록
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
            {tableColumns.theory.map(column => (
              <th key={column} className={'font-medium'}>
                {tableColumnMap.theory[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(row => (
              <tr key={row.id}>
                {tableColumns.theory.map(column => (
                  <td key={column} className={'text-center'}>
                    {column === 'file' ? (
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
    </div>
  );
}

export default Theory;
