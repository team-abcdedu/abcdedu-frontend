import { Dispatch, SetStateAction, useState, KeyboardEvent } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import { UserSearchCategory } from '@/types/user';

interface SearchBarProps {
  setSearchCategory: Dispatch<SetStateAction<UserSearchCategory>>;
  setSearchKey: Dispatch<SetStateAction<string>>;
  setSearchParams: SetURLSearchParams;
}

function SearchBar({
  setSearchCategory,
  setSearchKey,
  setSearchParams,
}: SearchBarProps) {
  const searchSelectList = [
    { value: 'name', name: '이름' },
    { value: 'school', name: '학교' },
    { value: 'studentId', name: '학번' },
    { value: 'role', name: '등급' },
  ];

  const roleSelectList = [
    { value: 'BASIC', name: '새싹' },
    { value: 'STUDENT', name: '학생' },
    { value: 'ADMIN', name: '관리자' },
  ];

  const [selectedCategory, setSelectedCategory] =
    useState<Exclude<UserSearchCategory, null>>('name');
  const [selectedRole, setSelectedRole] = useState('BASIC');
  const [inputText, setInputText] = useState('');

  const handleSearch = () => {
    if (selectedCategory !== 'role' && inputText === '') return;

    if (selectedCategory === 'role') {
      setSearchKey(selectedRole);
    } else {
      setSearchKey(inputText);
    }
    setSearchCategory(selectedCategory);
    setSearchParams({ page: '1' });
  };

  const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={
        'w-full h-60 pl-20 flex items-center gap-20 border-1 border-neutral-300'
      }
    >
      <span className={'font-medium'}>멤버 검색</span>
      <select
        className={'w-100 h-30 border-1 border-black rounded-md text-center'}
        onChange={e =>
          setSelectedCategory(
            e.target.value as Exclude<UserSearchCategory, null>,
          )
        }
        value={selectedCategory}
      >
        {searchSelectList.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <div className={'w-[300px] h-40'}>
        {selectedCategory === 'role' ? (
          <select
            className={
              'w-full h-full text-center border-1 rounded border-black'
            }
            onChange={e => setSelectedRole(e.target.value)}
            value={selectedRole}
          >
            {roleSelectList.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={'text'}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={pressEnter}
            className={'h-full border-1 p-5 rounded border-black w-full'}
          />
        )}
      </div>

      <button
        type={'button'}
        onClick={handleSearch}
        className={'w-100 h-40 bg-slate-300 rounded text-center'}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
