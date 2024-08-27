import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: PropsWithChildren) {
  // TODO: 로그인 확인
  const isLoggedIn = true; // 임시
  return isLoggedIn ? children : <Navigate to='/' replace />;
}
