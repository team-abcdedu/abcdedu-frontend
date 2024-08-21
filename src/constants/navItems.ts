import { HeaderMenuNavItem, HeaderNavItem } from '@/types/navTypes';

export const headerNavItems: HeaderNavItem[] = [
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
        to: '/about_us_gallery',
        text: '갤러리',
      },
      {
        to: '/about_us_history',
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
        to: '/class_a',
        text: 'A-Class',
      },
      {
        to: '/class_b',
        text: 'B-Class',
      },
      {
        to: '/class_c',
        text: 'C-Class',
      },
      {
        to: '/class_d',
        text: 'D-Class',
      },
    ],
  },
  {
    type: 'dropdown',
    to: '/community',
    text: '커뮤니티',
    list: [
      {
        to: '/community_levelup',
        text: '등업 게시판',
      },
      {
        to: '/community_project',
        text: 'ABCD Project',
      },
      {
        to: '/community_qna',
        text: 'Q & A',
      },
      {
        to: '/community_submit_assignment',
        text: '과제 제출',
      },
      {
        to: '/community_bulletin_board',
        text: '자유게시판',
      },
    ],
  },
  {
    type: 'link',
    to: '/contact',
    text: '문의',
  },
];

export const headerMenuNavItems: HeaderMenuNavItem[] = [
  {
    to: '/',
    text: '홈',
  },
  {
    to: '/about_us',
    text: '회사소개',
  },
  {
    to: '/classes',
    text: '클래스',
  },
  {
    to: '/community',
    text: '커뮤니티',
  },
  {
    to: '/contact',
    text: '문의',
  },
];
