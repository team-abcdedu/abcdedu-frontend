import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';

import AssignmentDetailModal from './components/AssignmentDetailModal';
import { tableColumnMap, tableColumns } from './constants';
import { AssignmentTableData } from './types';

const mockData: AssignmentTableData[] = [
  {
    id: '1',
    createdAt: '2021-10-01',
    name: '김철수',
  },
  {
    id: '2',
    createdAt: '2021-10-02',
    name: '이영희',
  },
  {
    id: '3',
    createdAt: '2021-10-03',
    name: '박영수',
  },
];

function Assignment() {
  const [data, setData] = useState<AssignmentTableData[]>([]);
  const [selectedAssignment, setSelectedAssignment] =
    useState<AssignmentTableData | null>(null);
  const { isVisible, toggleModal } = useModal();

  const handleRowClick = (assignment: AssignmentTableData) => {
    setSelectedAssignment(assignment);
    toggleModal();
  };

  useEffect(() => {
    // 임시
    setData(mockData);
  }, []);

  return (
    <>
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
                  {tableColumnMap.assignment[column]}
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
                  {tableColumns.assignment.map(column => (
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
      <AssignmentDetailModal
        assignment={selectedAssignment}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default Assignment;
