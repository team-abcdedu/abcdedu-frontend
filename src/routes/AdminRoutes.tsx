import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import AdminLayout from '@/components/AdminLayout';
import AdminRoute from '@/components/AdminRoute';

const Admin = lazy(() => import('@/pages/Admin'));
const Assignment = lazy(() => import('@/pages/Admin/Assignment'));
const Class = lazy(() => import('@/pages/Admin/Class'));
const ContactList = lazy(() => import('@/pages/Admin/Contact'));
const Exam = lazy(() => import('@/pages/Admin/Exam'));
const Survey = lazy(() => import('@/pages/Admin/Survey'));
const Theory = lazy(() => import('@/pages/Admin/Theory'));

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
        path: '/admin/exam',
        element: <Exam />,
      },
      {
        path: '/admin/assignment',
        element: <Assignment />,
      },
      {
        path: '/admin/survey',
        element: <Survey />,
      },
      {
        path: '/admin/theory',
        element: <Theory />,
      },
      {
        path: '/admin/contact',
        element: <ContactList />,
      },
    ],
  },
];
