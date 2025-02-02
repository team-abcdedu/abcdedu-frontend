import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useModal from '@/hooks/useModal';
import { ContactType } from '@/types/contact';

import { contactTableColumns, contactTypeLabel } from '../constants';

import ContactDetailModal from './components/ContactDetailModal';
import useGetContactList from './hooks/useGetContactList';

export default function ContactList() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { list, totalElements, isLoading, isError } = useGetContactList(page);
  const { isVisible, toggleModal } = useModal();
  const [selected, setSelected] = useState<number | null>(null);

  const tableColStyle = (col: string) => {
    if (col === 'contactId') return ' w-[10%]';
    if (col === 'type') return ' w-[10%]';
    if (col === 'userName') return ' w-[20%]';
    if (col === 'createdAt') return ' w-[15%]';
  };

  const formatValue = (column: string, value: string | number) => {
    if (column === 'createdAt' && typeof value === 'string')
      return value.split('T')[0];
    if (column === 'type') return contactTypeLabel[value as ContactType];
    return value;
  };

  const handleItemClick = (id: number) => {
    setSelected(id);
    toggleModal();
  };

  return (
    <div className='w-full h-full flex flex-col gap-20'>
      <h1 className='text-30 font-semibold'>문의 관리</h1>
      <table className='w-full table-fixed border-separate rounded-2xl overflow-hidden shadow-sm'>
        <thead className={'bg-slate-300 text-center'}>
          <tr>
            {contactTableColumns.columnList.map(column => (
              <th
                key={column}
                className={`font-medium ${tableColStyle(column)}`}
              >
                {contactTableColumns.columnLabels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(isError || (!isLoading && list.length === 0)) && (
            <tr>
              <td colSpan={5} className='text-center py-60'>
                데이터가 없습니다.
              </td>
            </tr>
          )}
          {list.map(item => (
            <tr
              key={item.contactId}
              className='text-center cursor-pointer hover:bg-gray-600/5'
              onClick={() => handleItemClick(item.contactId)}
            >
              {contactTableColumns.columnList.map(column => (
                <td key={column} className='truncate'>
                  {formatValue(column, item[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalElements={totalElements} />
      <ContactDetailModal
        id={selected}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}
