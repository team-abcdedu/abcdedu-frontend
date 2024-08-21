import { Link } from 'react-router-dom';

import Dropdown from '@/components/Dropdown';

interface NavItem {
  type: 'link' | 'dropdown';
  to: string;
  text: string;
  list?: {
    to: string;
    text: string;
  }[];
}

function HeaderNav() {
  const navItems: NavItem[] = [
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

  return (
    <>
      {navItems.map((item: NavItem) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                'px-12 grid place-items-center min-h-40 max-h-46 hover:bg-slate-200'
              }
            >
              {item.text}
            </Link>
          );
        }
        if (item.type === 'dropdown') {
          return (
            <Dropdown
              key={item.to}
              defaultDisplay={
                <Link to={item.to} className={'px-12'}>
                  {item.text}
                </Link>
              }
              defaultDisplayClassName={'min-h-40 max-h-46 hover:bg-slate-200'}
            >
              {item.list?.map(listItem => {
                return (
                  <Link key={listItem.to} to={listItem.to} className={'px-12'}>
                    {listItem.text}
                  </Link>
                );
              })}
            </Dropdown>
          );
        }
        return null;
      })}
    </>
  );
}

export default HeaderNav;
