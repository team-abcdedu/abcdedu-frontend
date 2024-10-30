import { ChangeEvent, useState } from 'react';

function RoleUpdater() {
  const roleSelectList = [
    { value: 'BASIC', name: '새싹' },
    { value: 'STUDENT', name: '학생' },
    { value: 'ADMIN', name: '관리자' },
  ];

  const [selectedRole, setSelectedRole] = useState('BASIC');

  const handleRoleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className={'w-full h-30 pl-10 mb-10 flex items-center gap-20'}>
      <span>선택 멤버를</span>
      <select
        className={'w-100 border-1 border-black rounded text-center'}
        onChange={handleRoleSelect}
        value={selectedRole}
      >
        {roleSelectList.map(item => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <span>(으)로</span>
      <button className={'w-80 h-30 rounded bg-slate-300'}>변경</button>
    </div>
  );
}

export default RoleUpdater;
