import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import { tableColumnMap, tableColumns } from '@/pages/Admin/constants';
import RoleUpdater from '@/pages/Admin/User/components/RoleUpdater';
import SearchBar from '@/pages/Admin/User/components/SearchBar';
import useGetUserList from '@/pages/Admin/User/hooks/useGetUserList';
import { UserSearchCategory, UserSummary } from '@/types/user';
import { formatDate } from '@/utils/formatDate';

function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const [searchCategory, setSearchCategory] =
    useState<UserSearchCategory>(null);
  const [searchKey, setSearchKey] = useState('');

  const { list, totalElements, isLoading, isError } = useGetUserList({
    currentPage,
    searchCategory,
    searchKey,
  });

  const tableColStyle = (col: string) => {
    if (col === 'memberId') return ' w-[5%]';
    if (col === 'role') return ' w-[10%]';
    if (col === 'name') return ' w-[10%]';
    if (col === 'email') return ' w-[15%]';
    if (col === 'school') return ' w-[15%]';
    if (col === 'studentId') return ' w-[15%]';
    if (col === 'createdAt') return ' w-[15%]';
  };

  const rowData = (column: keyof UserSummary, row: UserSummary) => {
    if (column === 'memberId') return <input type={'checkbox'} />;
    if (column === 'createdAt') return formatDate(row[column], true);
    return row[column];
  };

  return (
    <div className='w-full h-full flex flex-col gap-20'>
      <h1 className='text-30 font-semibold'>멤버 관리</h1>
      <SearchBar
        setSearchCategory={setSearchCategory}
        setSearchKey={setSearchKey}
        setSearchParams={setSearchParams}
      />

      <div className={'w-full'}>
        <RoleUpdater />
        <table
          className={
            'w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'
          }
        >
          <thead className={'bg-slate-300'}>
            <tr className={''}>
              {tableColumns.user.map(column => (
                <th
                  key={column}
                  className={`font-medium ${tableColStyle(column)}`}
                >
                  {column === 'memberId' ? (
                    <input type={'checkbox'} disabled />
                  ) : (
                    tableColumnMap.user[column]
                  )}
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
            {list && list.length > 0 ? (
              list.map(row => (
                <tr
                  key={row.name + row.studentId}
                  className={'cursor-pointer hover:bg-neutral-200'}
                >
                  {tableColumns.user.map(column => (
                    <td
                      key={column}
                      className={'text-center px-10 overflow-hidden'}
                    >
                      <div className={'truncate'}>{rowData(column, row)}</div>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className={'text-center'}>
                <td colSpan={7}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalElements={totalElements} />
      </div>
    </div>
  );
}

export default UserList;
