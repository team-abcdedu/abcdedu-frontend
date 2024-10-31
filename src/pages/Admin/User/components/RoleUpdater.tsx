import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { queryClient } from '@/libs/react-query';
import { roleSelectList } from '@/pages/Admin/constants/user';
import AdminUserApi from '@/services/admin/user';
import { UserRoleType } from '@/types/user';

function RoleUpdater({
  selectedUser,
  setSelectedUser,
  resetCheckedBoxes,
}: {
  selectedUser: Set<number>;
  setSelectedUser: Dispatch<SetStateAction<Set<number>>>;
  resetCheckedBoxes: () => void;
}) {
  const [selectedRole, setSelectedRole] = useState<UserRoleType>('BASIC');

  const handleRoleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value as UserRoleType);
  };

  const mutation = useMutation({
    mutationFn: () => {
      const members: { memberId: number }[] = [];
      selectedUser.forEach(memberId => {
        members.push({ memberId });
      });
      return AdminUserApi.patchUserRole({ members, roleName: selectedRole });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'list'] });
      setSelectedUser(new Set());
      resetCheckedBoxes();
      alert('등급이 변경되었습니다.');
    },
    onError: () => {
      alert('등급 변경에 실패했습니다.');
    },
  });

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
      <button
        type={'button'}
        onClick={() => mutation.mutate()}
        className={'w-80 h-30 rounded bg-slate-300'}
      >
        변경
      </button>
    </div>
  );
}

export default RoleUpdater;
