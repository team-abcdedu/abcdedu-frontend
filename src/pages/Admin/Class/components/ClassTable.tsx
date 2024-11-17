import useGetClass from '@/hooks/class/useGetClass';
import { tableColumnMap, tableColumns } from '@/pages/Admin/constants';
import { ClassData } from '@/types/class';

interface ClassTableProps {
  handleRowClick: (classData: ClassData) => void;
}

function ClassTable({ handleRowClick }: ClassTableProps) {
  const { classDataList, isLoading, isError } = useGetClass();

  const fieldValue = (column: keyof ClassData, row: ClassData) => {
    if (column === 'subClasses') {
      const subClasses = row[column];
      const subClassesTitle = subClasses.map(subClass => subClass.title);
      return subClassesTitle.join(', ');
    }
    return row[column];
  };

  return (
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
        {(isError || isLoading) && (
          <tr className={'text-center'}>
            <td colSpan={4}>
              {isError
                ? '데이터를 불러오는 중 문제가 발생했습니다.'
                : '데이터를 불러오는 중입니다.'}
            </td>
          </tr>
        )}

        {classDataList && classDataList.length > 0 ? (
          classDataList.map(classData => (
            <tr
              key={classData.title}
              className={'cursor-pointer hover:bg-neutral-200'}
              onClick={() => handleRowClick({ ...classData })}
            >
              {tableColumns.class.map(column => (
                <td
                  key={column}
                  className={'text-center px-10 overflow-hidden'}
                >
                  <div className={'truncate'}>
                    {fieldValue(column, classData)}
                  </div>
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr className={'text-center'}>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ClassTable;
