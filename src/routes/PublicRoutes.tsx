import { RouteObject } from 'react-router-dom';

import Classes from '@/pages/Classes';
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
];
