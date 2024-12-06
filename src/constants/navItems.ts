import { NavItem } from '@/types/navTypes';

export const headerNavItems: NavItem[] = [
  {
    type: 'link',
    to: '/',
    text: '홈',
  },
  {
    type: 'dropdown',
    to: '/about_us',
    text: '회사소개',
    list: [
      {
        to: '/about_us',
        text: '비즈니스',
      },
      {
        to: '/about_us/gallery',
        text: '갤러리',
      },
      {
        to: '/about_us/history',
        text: '히스토리',
      },
    ],
  },
  {
    type: 'dropdown',
    to: '/classes',
    text: '클래스',
    list: [
      {
        to: '/classes/a',
        text: 'Class A',
      },
      {
        to: '/classes/b',
        text: 'Class B',
      },
      {
        to: '/classes/c',
        text: 'Class C',
      },
      {
        to: '/classes/d',
        text: 'Class D',
      },
    ],
  },
  {
    type: 'dropdown',
    to: '/community',
    text: '커뮤니티',
    list: [
      {
        to: '/community/project',
        text: 'ABCD Project',
      },
      {
        to: '/community/qna',
        text: 'Q & A',
      },
      {
        to: '/community/free',
        text: '자유게시판',
      },
      {
        to: '/community/document',
        text: '자료실',
      },
    ],
  },
  {
    type: 'link',
    to: '/homework',
    text: '과제',
  },
  {
    type: 'link',
    to: '/survey',
    text: '설문',
  },
  {
    type: 'link',
    to: '/contact',
    text: '문의',
  },
];

export const adminNavItem: NavItem = {
  to: '/admin',
  text: '관리자',
};
