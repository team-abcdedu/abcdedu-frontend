import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }: PropsWithChildren) {
  // role check
  const admin = true;
  return admin ? children : <Navigate to={'/'} replace />;
}
