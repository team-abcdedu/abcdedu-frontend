import { ChangeEvent, useState } from 'react';

function SearchBar() {
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

  const [searchCategory, setSearchCategory] = useState('name');

  const handleSearchSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory(e.target.value);
  };

  const [selectedRole, setSelectedRole] = useState('BASIC');

  const handleRoleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
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
        onChange={handleSearchSelect}
        value={searchCategory}
      >
        {searchSelectList.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <div className={'w-[300px] h-40'}>
        {searchCategory === 'role' ? (
          <select
            className={
              'w-full h-full text-center border-1 rounded border-black'
            }
            onChange={handleRoleSelect}
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
            className={'h-full border-1 p-5 rounded border-black w-full'}
          />
        )}
      </div>

      <button className={'w-100 h-40 bg-slate-300 rounded text-center'}>
        검색
      </button>
    </div>
  );
}

export default SearchBar;
