import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import AdminLayout from '@/components/AdminLayout';
import AdminRoute from '@/components/AdminRoute';

const Admin = lazy(() => import('@/pages/Admin'));
const Homework = lazy(() => import('../pages/Admin/Homework'));
const Class = lazy(() => import('@/pages/Admin/Class'));
const ContactList = lazy(() => import('@/pages/Admin/Contact'));
const Survey = lazy(() => import('@/pages/Admin/Survey'));

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
        path: '/admin/class',
        element: <Class />,
      },
      {
        path: '/admin/homework',
        element: <Homework />,
      },
      {
        path: '/admin/survey',
        element: <Survey />,
      },
      {
        path: '/admin/contact',
        element: <ContactList />,
      },
    ],
  },
];
