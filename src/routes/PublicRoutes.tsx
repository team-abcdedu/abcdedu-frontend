import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import AboutUs from '@/pages/AboutUs';
import Gallery from '@/pages/AboutUs/Gallery';
import History from '@/pages/AboutUs/History';
import Assignment from '@/pages/Assignment';
import Classes from '@/pages/Classes';
import Community from '@/pages/Community';
import Board from '@/pages/Community/Board';
import LevelUp from '@/pages/Community/LevelUp';
import PostDetail from '@/pages/Community/PostDetail';
import Project from '@/pages/Community/Project';
import Qna from '@/pages/Community/Qna';
import Submit from '@/pages/Community/Submit';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Survey from '@/pages/Survey';

import Class from '../pages/Classes/[classId]';
import SubClass from '../pages/Classes/[classId]/[subClassId]';

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
        path: '/about_us',
        element: <AboutUs />,
      },
      {
        path: '/about_us/gallery',
        element: <Gallery />,
      },
      {
        path: '/about_us/history',
        element: <History />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/classes/:classId',
        element: <Class />,
      },
      {
        path: '/classes/:classId/:subClassId',
        element: <SubClass />,
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
      {
        path: '/assignment',
        element: <Assignment />,
      },
      {
        path: '/survey',
        element: <Survey />,
      },
    ],
  },
];
