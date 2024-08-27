import { createBrowserRouter } from 'react-router-dom';

import { adminRoutes } from './AdminRoutes';
import { privateRoutes } from './PrivateRoutes';
import { publicRoutes } from './PublicRoutes';

const router = createBrowserRouter([
  ...adminRoutes,
  ...privateRoutes,
  ...publicRoutes,
]);

export default router;
