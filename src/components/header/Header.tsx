import { List } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderMenu from '@/components/Header/HeaderMenu';
import HeaderNav from '@/components/Header/HeaderNav';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerBtnStyle =
    'px-24 min-h-40 max-h-46 grid place-items-center rounded-md';

  return (
    <header
      className={
        'w-screen h-72 flex justify-between items-center text-15 border-b-1 border-b-blue-800 px-16 md:px-24'
      }
    >
      <div className={'grid place-items-center'}>
        <Link to={'/'}>ABCDEdu</Link>
      </div>
      <div className={'grid place-items-center'}>
        <div className={'hidden md:flex flex-end gap-12'}>
          <HeaderNav />
          <button
            className={`${headerBtnStyle} border-1 border-blue-800 text-blue-800 hover:bg-slate-200`}
          >
            로그인
          </button>
          <button
            className={`${headerBtnStyle} bg-blue-800 text-white hover:opacity-80`}
          >
            회원가입
          </button>
          <select
            className={
              'p-6 grid place-items-center w-80 font-extralight underline text-14'
            }
            defaultValue={'Korean'}
          >
            <option>Korean</option>
            <option>English</option>
          </select>
        </div>
        <div className={'md:hidden flex flex-col flex-end '}>
          <div>
            <div className={`grid place-items-center`}>
              <List size={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            {isMenuOpen && <HeaderMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
