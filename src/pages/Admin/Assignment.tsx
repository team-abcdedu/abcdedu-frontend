import { mockAdminAssignment } from '@/mock/adminMock';
import { tableColumnInfo } from '@/pages/Admin/constants/tableInfo';

function Assignment() {
  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <h1 className={'text-40 font-bold'}>assignment</h1>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {tableColumnInfo.assignment.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockAdminAssignment.map((assignment, index) => (
            <tr
              key={assignment.id}
              className={`${index % 2 ? 'bg-slate-200' : 'bg-slate-100'}`}
            >
              {Object.values(assignment).map(value => (
                <td key={value} className={'text-center'}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      pagination
    </div>
  );
}

export default Assignment;
