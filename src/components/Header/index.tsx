import { Link } from 'react-router-dom';

import HeaderMenu from '@/components/Header/HeaderMenu';
import MobileMenu from '@/components/Header/MobileMenu';

function Header() {
  return (
    <header
      className={
        'w-full h-72 flex justify-between items-center text-15 border-b-1 border-b-primary-300 px-16 md:px-24'
      }
    >
      <div className={'grid place-items-center'}>
        <Link to={'/'}>ABCDEdu</Link>
      </div>
      <div>
        <HeaderMenu />
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
