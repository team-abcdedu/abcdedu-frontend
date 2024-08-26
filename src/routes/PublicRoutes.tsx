import { RouteObject } from 'react-router-dom';

import Classes from '@/pages/Classes';
import Course from '@/pages/Classes/[courseId]';
import Class from '@/pages/Classes/[courseId]/[classCode]';
import Home from '@/pages/Home';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/classes',
    index: true,
    element: <Classes />,
  },
  {
    path: '/classes/:courseId',
    index: true,
    element: <Course />,
  },
  {
    path: '/classes/:courseId/:classCode',
    index: true,
    element: <Class />,
  },
];
