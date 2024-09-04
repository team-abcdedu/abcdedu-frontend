import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';

import ClassRegisterModal from './components/ClassRegisterModal';
import { tableColumns } from './constants';

function Class() {
  const [data, setData] = useState([]);
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    // 임시
    setData([]);
  }, []);

  return (
    <>
      <div className={'w-full h-full flex flex-col gap-20'}>
        <div className={'w-full flex justify-between pr-50'}>
          <h1 className={'text-30 font-semibold'}>클래스 목록</h1>
          <button
            className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
            onClick={toggleModal}
          >
            클래스 등록
          </button>
        </div>
        <table
          className={
            'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
          }
        >
          <thead className={'bg-slate-300'}>
            <tr className={''}>
              {tableColumns.class.map(column => (
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
                  {tableColumns.class.map(column => (
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
      <ClassRegisterModal isVisible={isVisible} onClose={toggleModal} />
    </>
  );
}

export default Class;
