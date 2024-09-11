import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import useBoundStore from '@/stores';

export default function AdminRoute({ children }: PropsWithChildren) {
  const user = useBoundStore(state => state.user);

  useEffect(() => {
    if (user && user.role !== '관리자') {
      alert('권한이 없습니다.');
    }
  }, [user]);

  return user && user.role === '관리자' ? (
    children
  ) : (
    <Navigate to={'/'} replace />
  );
}
