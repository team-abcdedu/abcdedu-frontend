import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import Classes from '@/pages/Classes';
import Course from '@/pages/Classes/[courseId]';
import Class from '@/pages/Classes/[courseId]/[classCode]';
import Home from '@/pages/Home';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />, // 부모 컴포넌트
    children: [
      {
        index: true, // 기본적으로 렌더링되는 컴포넌트
        element: <Home />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/classes/:courseId',
        element: <Course />,
      },
      {
        path: '/classes/:courseId/:classCode',
        element: <Class />,
      },
    ],
  },
];
