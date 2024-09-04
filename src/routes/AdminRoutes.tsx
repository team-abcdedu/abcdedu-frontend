import { RouteObject } from 'react-router-dom';

import AdminLayout from '@/components/AdminLayout';
import AdminRoute from '@/components/AdminRoute';
import Admin from '@/pages/Admin';
import Assignment from '@/pages/Admin/Assignment';
import Survey from '@/pages/Admin/Survey';

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: '/admin/assignment',
        element: <Assignment />,
      },
      {
        path: '/admin/survey',
        element: <Survey />,
      },
    ],
  },
];
