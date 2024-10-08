import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/icons/logo.png';
import useBoundStore from '@/stores';

import HeaderMenu from './HeaderMenu';
import MobileMenu from './MobileMenu';

function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const { setHeaderRef } = useBoundStore();

  useEffect(() => {
    if (headerRef.current) {
      setHeaderRef(headerRef.current);
    }
  }, [setHeaderRef]);

  return (
    <header
      className={
        'top-0 fixed w-full h-70 md:h-100 pl-26 pr-17 md:px-43 lg:px-103 py-17 md:pt-22 md:pb-10 flex justify-between items-center md:flex-col md:items-stretch bg-white z-10'
      }
      ref={headerRef}
    >
      <Link to={'/'} className={'flex items-center w-fit'}>
        <img src={logo} alt={'logo'} className={'w-20 h-32 mr-[10px]'} />
        <h1
          className={
            'text-16 font-bold bg-gradient-to-r from-primary-400 via-primary-400 to-sky-600 text-transparent bg-clip-text'
          }
        >
          ABCDEdu
        </h1>
      </Link>
      <HeaderMenu />
      <MobileMenu />
    </header>
  );
}

export default Header;
