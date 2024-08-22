import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';

import { adminRoutes } from './AdminRoutes';
import { privateRoutes } from './PrivateRoutes';
import { publicRoutes } from './PublicRoutes';

const router = createBrowserRouter([
  ...adminRoutes,
  ...privateRoutes,
  {
    path: '/',
    element: <Layout />,
    children: [...publicRoutes],
  },
]);

export default router;
