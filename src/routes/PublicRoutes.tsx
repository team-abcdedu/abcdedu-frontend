import { RouteObject } from 'react-router-dom';

import Community from '@/pages/Community';
import Board from '@/pages/Community/Board';
import LevelUp from '@/pages/Community/LevelUp';
import Project from '@/pages/Community/Project';
import Qna from '@/pages/Community/Qna';
import Submit from '@/pages/Community/Submit';
import Home from '@/pages/Home';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Home />,
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
    path: '/community_project',
    element: <Project />,
  },
  {
    path: '/community_qna',
    element: <Qna />,
  },
  {
    path: '/community_submit_assignment',
    element: <Submit />,
  },
  {
    path: '/community_bulletin_board',
    element: <Board />,
  },
];
