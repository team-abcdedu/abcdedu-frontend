import { RouteObject } from 'react-router-dom';

import AdminLayout from '@/components/AdminLayout';
import AdminRoute from '@/components/AdminRoute';
import Admin from '@/pages/Admin';
import Assignment from '@/pages/Admin/Assignment';
import Class from '@/pages/Admin/Class';
import ContactList from '@/pages/Admin/Contact';
import Exam from '@/pages/Admin/Exam';
import Survey from '@/pages/Admin/Survey';
import Theory from '@/pages/Admin/Theory';

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
