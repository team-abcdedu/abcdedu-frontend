import { Link } from 'react-router-dom'; // React Router를 사용한다면 import 필요

import { HeaderNavItem } from '@/types/navTypes';

export const footerNavItems: HeaderNavItem[] = [
  {
    type: 'link',
    to: '/',
    text: 'HOME',
  },
  {
    type: 'link',
    to: '/about_us',
    text: 'ABOUT US',
  },
  {
    type: 'link',
    to: '/classes',
    text: 'CLASSES',
  },
  {
    type: 'link',
    to: '/community',
    text: 'COMMUNITY',
  },
  {
    type: 'link',
    to: '/contact',
    text: 'CONTACT',
  },
];

function FooterNav() {
  return (
    <div className='footer-nav'>
      {footerNavItems.map(item => (
        <Link key={item.to} href={item.to} className='px-7'>
          {item.text}
        </Link>
      ))}
    </div>
  );
}

export default FooterNav;
