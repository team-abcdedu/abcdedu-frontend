import { Link } from 'react-router-dom';

import logo from '@/assets/logo.png';
import HeaderMenu from '@/components/Header/HeaderMenu';
import MobileMenu from '@/components/Header/MobileMenu';

function Header() {
  return (
    <header
      className={
        'top-0 mt-[51px] sm:mt-0 sticky sm:fixed w-full h-[36px] sm:h-[100px] pl-26 pr-17 sm:px-43 md:px-73 lg:px-103 sm:pt-22 sm:pb-10 flex justify-between items-center sm:flex-col sm:items-stretch bg-white'
      }
    >
      <Link to={'/'} className={'flex items-center'}>
        <img src={logo} alt={'logo'} className={'w-20 mr-[10px]'} />
        <span
          className={
            'text-16 font-bold bg-gradient-to-r from-primary-400 via-primary-400 to-sky-600 text-transparent bg-clip-text'
          }
        >
          ABCDEdu
        </span>
      </Link>
      <HeaderMenu />
      <MobileMenu />
    </header>
  );
}

export default Header;
