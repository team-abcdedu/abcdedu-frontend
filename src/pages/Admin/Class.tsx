import { useEffect, useState } from 'react';

import useModal from '@/hooks/useModal';

import ClassDetailModal from './components/ClassDetailModal';
import ClassRegisterModal from './components/ClassRegisterModal';
import SubClassRegisterModal from './components/SubClassRegisterModal';
import { tableColumnMap, tableColumns } from './constants';
import { ClassTableData } from './types';

const mockData: ClassTableData[] = [
  {
    id: '1',
    createdAt: '2021-10-01',
    title: '클래스1',
    description: '클래스1 설명',
    list: ['하위클래스1, 하위클래스2'],
  },
  {
    id: '2',
    createdAt: '2021-10-02',
    title: '클래스2',
    description: '클래스2 설명',
    list: ['하위클래스3, 하위클래스4'],
  },
];

function DataItem({
  column,
  row,
}: {
  column: keyof ClassTableData;
  row: ClassTableData;
}) {
  if (column === 'list') {
    return <span>{row[column].join(', ')}</span>;
  }
  return <span>{row[column]}</span>;
}

function Class() {
  const [data, setData] = useState<ClassTableData[]>([]);
  const [selectedClass, setSelectedClass] = useState<ClassTableData | null>(
    null,
  );

  const { isVisible: classVisible, toggleModal: classToggle } = useModal();
  const { isVisible: subClassVisible, toggleModal: subClassToggle } =
    useModal();
  const { isVisible: classDetailVisible, toggleModal: classDetailToggle } =
    useModal();

  const handleRowClick = (classData: ClassTableData) => {
    setSelectedClass(classData);
    classDetailToggle();
  };

  useEffect(() => {
    // 임시
    setData(mockData);
  }, []);

  return (
    <>
      <div className={'w-full h-full flex flex-col gap-20'}>
        <div className={'w-full flex justify-between pr-50'}>
          <h1 className={'text-30 font-semibold'}>클래스 관리</h1>
          <div className={'flex-row-center gap-30'}>
            <button
              className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
              onClick={classToggle}
            >
              클래스 등록
            </button>
            <button
              className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
              onClick={subClassToggle}
            >
              서브 클래스 등록
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
              {tableColumns.class.map(column => (
                <th key={column} className={'font-medium'}>
                  {tableColumnMap.class[column]}
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
                  {tableColumns.class.map(column => (
                    <td key={column} className={'text-center'}>
                      <DataItem column={column} row={row} />
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
      <ClassRegisterModal isVisible={classVisible} onClose={classToggle} />
      <SubClassRegisterModal
        isVisible={subClassVisible}
        onClose={subClassToggle}
      />
      <ClassDetailModal
        classData={selectedClass}
        isVisible={classDetailVisible}
        onClose={classDetailToggle}
      />
    </>
  );
}

export default Class;
