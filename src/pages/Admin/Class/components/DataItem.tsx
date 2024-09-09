import { ClassTableData } from '@/types/admin';

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
      return <div>없음</div>;
    }
    const subClassesTitle = subClasses.map(subClass => subClass.title);
    return <div className={'truncate'}>{subClassesTitle.join(', ')}</div>;
  }
  return <div className={'truncate'}>{row[column]}</div>;
}

export default DataItem;
