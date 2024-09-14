import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import useBoundStore from '@/stores';

export default function PrivateRoute({ children }: PropsWithChildren) {
  const user = useBoundStore(state => state.user);
  return user ? children : <Navigate to='/' replace />;
}
