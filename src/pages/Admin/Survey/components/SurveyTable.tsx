import { surveyTableColumns } from '../../constants';

function SurveyTable() {
  return (
    <>
      <table
        className={
          'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
        }
      >
        <thead className={'bg-slate-300'}>
          <tr className={''}>
            {surveyTableColumns.columnList.map(column => (
              <th key={column} className={'font-medium'}>
                {surveyTableColumns.columnLabels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* {data.length > 0 ? ( */}
          {/*  data.map(row => ( */}
          {/*    <tr */}
          {/*      key={row.id} */}
          {/*      className={'cursor-pointer hover:bg-neutral-200'} */}
          {/*      onClick={() => handleRowClick({ ...row })} */}
          {/*    > */}
          {/*      {surveyTableColumns.columnList.map(column => ( */}
          {/*        <td key={column} className={'text-center'}> */}
          {/*          /!* {row[column]} *!/ */}
          {/*        </td> */}
          {/*      ))} */}
          {/*    </tr> */}
          {/*  )) */}
          {/* ) : ( */}
          {/*  <tr className={'text-center'}> */}
          {/*    <td colSpan={4}>데이터가 없습니다.</td> */}
          {/*  </tr> */}
          {/* )} */}
        </tbody>
      </table>
    </>
  );
}

export default SurveyTable;
