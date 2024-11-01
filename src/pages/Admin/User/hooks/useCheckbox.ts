import { ChangeEvent, useState } from 'react';

import { UserSummary } from '@/types/user';

function useCheckbox({ list }: { list: UserSummary[] }) {
  // 등업 멤버 memberId 관리
  const [selectedUser, setSelectedUser] = useState<Set<number>>(new Set());

  // 등업 멤버 체크 박스들 체크여부 관리 - 한 페이지에 보여지는 아이템 개수를 배열 길이로
  const [checkedBoxes, setCheckedBoxes] = useState<Array<boolean>>(
    Array(10).fill(false),
  );

  // 등업 멤버 체크 박스 세팅 - 전체 선택 시 사용
  const setAllCheckedBoxes = (state: boolean) => {
    const updateState = checkedBoxes.map(() => state);
    setCheckedBoxes(updateState);
  };

  // 전체 선택 체크여부 관리
  const [checkAll, setCheckAll] = useState(false);

  // 전체 선택 체크 클릭 로직
  const checkAllBoxes = () => {
    if (checkAll) setSelectedUser(new Set());
    else {
      const checkedAllMemberId = new Set(
        list.map(user => Number(user.memberId)),
      );
      setSelectedUser(checkedAllMemberId);
    }
    setAllCheckedBoxes(!checkAll);
    setCheckAll(prev => !prev);
  };

  // 모든 박스 체크 해제 - 등업 요청 성공 시 사용
  const resetCheckedBoxes = () => {
    setAllCheckedBoxes(false);
    setCheckAll(false);
  };

  // 단일 체크 박스 클릭 시 체크 상태, memberId 관리
  const checkBoxHandler = (
    e: ChangeEvent<HTMLInputElement>,
    rowIdx: number,
  ) => {
    const updateCheckedBoxes = [...checkedBoxes];
    updateCheckedBoxes[rowIdx] = !updateCheckedBoxes[rowIdx];
    setCheckedBoxes(updateCheckedBoxes);

    const memberId = Number(e.target.value);
    const updateSelectedUser = new Set([...selectedUser]);
    if (updateSelectedUser.has(memberId)) {
      updateSelectedUser.delete(memberId);
    } else {
      updateSelectedUser.add(memberId);
    }
    setSelectedUser(updateSelectedUser);
  };

  return {
    selectedUser,
    setSelectedUser,
    checkedBoxes,
    setCheckedBoxes,
    checkAll,
    setCheckAll,
    setAllCheckedBoxes,
    checkAllBoxes,
    resetCheckedBoxes,
    checkBoxHandler,
  };
}

export default useCheckbox;
