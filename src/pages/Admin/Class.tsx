import { useState } from 'react';

import useModal from '@/hooks/useModal';
import truncateString from '@/utils/truncateString';

import ClassDetailModal from './components/ClassDetailModal';
import ClassRegisterModal from './components/ClassRegisterModal';
import SubClassRegisterModal from './components/SubClassRegisterModal';
import { tableColumnMap, tableColumns } from './constants';
import useClass from './hooks/useClass';
import { ClassTableData } from './types';

function DataItem({
  column,
  row,
}: {
  column: keyof ClassTableData;
  row: ClassTableData;
}) {
  if (column === 'subClasses') {
    const subClasses = row[column];
    if (subClasses.length === 0) {
      return <span>없음</span>;
    }
    const subClassesTitle = subClasses.map(subClass => subClass.title);
    return <span>{truncateString(subClassesTitle.join(', '), 20)}</span>;
  }
  return <span>{truncateString(row[column], 20)}</span>;
}

function Class() {
  const [selectedClass, setSelectedClass] = useState<ClassTableData | null>(
    null,
  );
  const { isVisible: classVisible, toggleModal: classToggle } = useModal();
  const { isVisible: subClassVisible, toggleModal: subClassToggle } =
    useModal();
  const { isVisible: classDetailVisible, toggleModal: classDetailToggle } =
    useModal();

  const { data, isLoading, isError } = useClass();

  const handleRowClick = (classData: ClassTableData) => {
    setSelectedClass(classData);
    classDetailToggle();
  };

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
            {isLoading && (
              <tr className={'text-center'}>
                <td>데이터를 불러오는 중입니다.</td>
              </tr>
            )}
            {isError && (
              <tr className={'text-center'}>
                <td>데이터가 없습니다.</td>
              </tr>
            )}
            {data && data.length > 0 ? (
              data.map(row => (
                <tr
                  key={row.title + row.type}
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
