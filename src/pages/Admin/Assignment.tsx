import { useEffect, useState } from 'react';

import { tableColumns } from '@/pages/Admin/constants';

function Assignment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 임시
    setData([]);
  }, []);

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <h1 className={'text-30 font-semibold'}>과제 관리</h1>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {tableColumns.assignment.map(column => (
              <th key={column} className={'font-medium'}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={idx}>
                {tableColumns.assignment.map(column => (
                  <td key={column}>{row[column]}</td>
                ))}
              </tr>
            ))
          ) : (
            <div className={'text-center'}>데이터가 없습니다.</div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Assignment;
