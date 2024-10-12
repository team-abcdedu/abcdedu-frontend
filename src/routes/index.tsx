import * as Sentry from '@sentry/react';
import { createBrowserRouter } from 'react-router-dom';

import { adminRoutes } from './AdminRoutes';
import { privateRoutes } from './PrivateRoutes';
import { publicRoutes } from './PublicRoutes';

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter);

const router = sentryCreateBrowserRouter([
  ...adminRoutes,
  ...privateRoutes,
  ...publicRoutes,
]);

export default router;
