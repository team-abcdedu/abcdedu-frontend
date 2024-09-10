import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';

import { tableColumnMap, tableColumns } from '../../constants';
import { AssignmentTableData } from '../../types';

import AssignmentDetailModal from './AssignmentDetailModal';

function AssignmentTable() {
  const [data, setData] = useState<AssignmentTableData[]>([]);
  const [selectedAssignment, setSelectedAssignment] =
    useState<AssignmentTableData | null>(null);
  const { isVisible, toggleModal } = useModal();

  const handleRowClick = (assignment: AssignmentTableData) => {
    setSelectedAssignment(assignment);
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
      <AssignmentDetailModal
        assignment={selectedAssignment}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </>
  );
}

export default AssignmentTable;
