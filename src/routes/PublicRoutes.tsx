import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

import Layout from '@/components/Layout';
import Home from '@/pages/Home';

const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Gallery = lazy(() => import('@/pages/AboutUs/Gallery'));
const History = lazy(() => import('@/pages/AboutUs/History'));

const Classes = lazy(() => import('@/pages/Classes'));
const Class = lazy(() => import('@/pages/Classes/[classId]'));
const SubClass = lazy(() => import('@/pages/Classes/[classId]/[subClassId]'));

const Community = lazy(() => import('@/pages/Community'));
const Board = lazy(() => import('@/pages/Community/Board'));
const LevelUp = lazy(() => import('@/pages/Community/LevelUp'));
const PostDetail = lazy(() => import('@/pages/Community/PostDetail'));
const Project = lazy(() => import('@/pages/Community/Project'));
const Qna = lazy(() => import('@/pages/Community/Qna'));

const Homework = lazy(() => import('@/pages/Homework'));
const Survey = lazy(() => import('@/pages/Survey'));

const Contact = lazy(() => import('@/pages/Contact'));

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
        path: '/homework',
        element: <Homework />,
      },
      {
        path: '/survey',
        element: <Survey />,
      },
    ],
  },
];
