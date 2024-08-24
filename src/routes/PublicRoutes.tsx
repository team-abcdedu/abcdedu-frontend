import { RouteObject } from 'react-router-dom';

import Community from '@/pages/Community';
import Home from '@/pages/Home';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/community',
    index: true,
    element: <Community />,
  },
];
