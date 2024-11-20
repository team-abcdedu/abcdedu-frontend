import useClassDataList from '@/hooks/class/useClassDataList';
import { classTableColumns } from '@/pages/Admin/constants';
import { ClassData } from '@/types/class';

interface ClassTableProps {
  handleRowClick: (classData: ClassData) => void;
}

function ClassTable({ handleRowClick }: ClassTableProps) {
  const { classDataList, isLoading, isError } = useClassDataList();

  const fieldValue = (column: keyof ClassData, row: ClassData) => {
    if (column === 'subClasses') {
      const subClasses = row[column];
      const subClassesTitle = subClasses.map(subClass => subClass.title);
      return subClassesTitle.join('\n');
    }
    return row[column];
  };

  const tableColStyle = (col: string) => {
    if (col === 'title') return ' w-[10%]';
    if (col === 'subTitle') return ' w-[15%]';
    if (col === 'description') return ' w-[45%]';
    if (col === 'subClasses') return ' w-[30%]';
  };

  return (
    <div className={'w-full h-full flex-col-center gap-3 pb-5 overflow-hidden'}>
      <div className={'w-full h-[8%] overflow-hidden scrollbar-gutter'}>
        <table
          className={
            'w-full h-full border-separate border-spacing-x-2 rounded-t-2xl shadow-sm overflow-hidden'
          }
        >
          <thead className={'bg-slate-300'}>
            <tr>
              {classTableColumns.columnList.map(column => (
                <th
                  key={column}
                  className={`font-medium ${tableColStyle(column)}`}
                >
                  {classTableColumns.columnLabels[column]}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div
        className={
          'w-full h-full overflow-y-scroll scrollbar-gutter rounded-b-2xl shadow-sm'
        }
      >
        <table
          className={
            'w-full h-full border-separate border-spacing-x-2 border-spacing-y-5'
          }
        >
          <tbody className={'w-full h-full table-fixed'}>
            {(isError || isLoading) && (
              <tr className={'text-center'}>
                <td colSpan={4}>
                  {isError
                    ? '데이터를 불러오는 중 문제가 발생했습니다.'
                    : '데이터를 불러오는 중입니다.'}
                </td>
              </tr>
            )}

            {classDataList &&
              classDataList.length > 0 &&
              classDataList.map(classData => (
                <tr
                  key={classData.title}
                  className={`cursor-pointer bg-slate-50 hover:bg-neutral-200`}
                  onClick={() => handleRowClick({ ...classData })}
                >
                  {classTableColumns.columnList.map(column => (
                    <td
                      key={column}
                      className={`text-center text-17 p-10 break-keep whitespace-pre-wrap ${tableColStyle(column)}`}
                    >
                      {fieldValue(column, classData)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassTable;
