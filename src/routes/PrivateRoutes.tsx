import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import PrivateRoute from '@/components/PrivateRoute';

const MyPage = lazy(() => import('@/pages/My'));
const Leave = lazy(() => import('@/pages/My/Leave'));

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
      {
        path: '/mypage/leave',
        element: <Leave />,
      },
    ],
  },
];
