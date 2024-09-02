import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import Classes from '@/pages/Classes';
import Course from '@/pages/Classes/[courseId]';
import Class from '@/pages/Classes/[courseId]/[classCode]';
import Community from '@/pages/Community';
import Board from '@/pages/Community/Board';
import LevelUp from '@/pages/Community/LevelUp';
import PostDetail from '@/pages/Community/PostDetail';
import Project from '@/pages/Community/Project';
import Qna from '@/pages/Community/Qna';
import Submit from '@/pages/Community/Submit';
import Contact from '@/pages/contact';
import Home from '@/pages/Home';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />, // 부모 컴포넌트
    children: [
      {
        index: true, // 기본적으로 렌더링되는 컴포넌트
        element: <Home />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/classes/:courseId',
        element: <Course />,
      },
      {
        path: '/classes/:courseId/:classCode',
        element: <Class />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/community_levelup',
        element: <LevelUp />,
      },
      {
        path: '/community_levelup/:postId',
        element: <PostDetail />,
      },
      {
        path: '/community_project',
        element: <Project />,
      },
      {
        path: '/community_project/:postId',
        element: <PostDetail />,
      },
      {
        path: '/community_qna',
        element: <Qna />,
      },
      {
        path: '/community_qna/:postId',
        element: <PostDetail />,
      },
      {
        path: '/community_submit_assignment',
        element: <Submit />,
      },
      {
        path: '/community_bulletin_board',
        element: <Board />,
      },
      {
        path: '/community_bulletin_board/:popstId',
        element: <PostDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];
