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
      {footerNavItems.map((item, index) => (
        <a key={index} href={item.to} className='px-7'>
          {item.text}
        </a>
      ))}
    </div>
  );
}

export default FooterNav;
