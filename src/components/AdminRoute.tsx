import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import useBoundStore from '@/stores';

export default function AdminRoute({ children }: PropsWithChildren) {
  const user = useBoundStore(state => state.user);

  useEffect(() => {
    // todo: 나중에 관리자로 변경
    if (user && user.role !== '새싹') {
      alert('권한이 없습니다.');
    }
  }, [user]);

  return user && user.role === '새싹' ? (
    children
  ) : (
    <Navigate to={'/'} replace />
  );
}
