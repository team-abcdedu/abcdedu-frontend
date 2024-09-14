import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import PrivateRoute from '@/components/PrivateRoute';

const MyPage = lazy(() => import('@/pages/My'));

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
];
