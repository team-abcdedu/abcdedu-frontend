import { useEffect, useRef, useState } from 'react';

import MenuIcon from '@/assets/icons/menu.svg?react';

import MobileNav from './MobileNav';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={'sm:hidden flex flex-end'} ref={menuRef}>
      <div>
        <div className={'grid place-items-center'}>
          <MenuIcon
            className={'w-32 h-32'}
            onClick={() => setIsMenuOpen(prev => !prev)}
          />
        </div>
        {isMenuOpen && (
          <MobileNav onClick={() => setIsMenuOpen(prev => !prev)} />
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
