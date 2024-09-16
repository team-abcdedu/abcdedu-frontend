import { useEffect, useState } from 'react';

import { HomeworkSummary } from '@/types/homework';

import { tableColumnMap, tableColumns } from '../../constants';

function HomeworkTable() {
  const [data, setData] = useState<HomeworkSummary[]>([]);
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
            {tableColumns.homework.map(column => (
              <th key={column} className={'font-medium'}>
                {tableColumnMap.homework[column]}
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
              >
                {tableColumns.homework.map(column => (
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
    </>
  );
}

export default HomeworkTable;
