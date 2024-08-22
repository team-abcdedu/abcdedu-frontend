import { List } from '@phosphor-icons/react';
import { useState } from 'react';

import MobileNav from '@/components/Header/MobileNav';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={'md:hidden flex flex-end'}>
      <div>
        <div className={'grid place-items-center'}>
          <List size={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        {isMenuOpen && <MobileNav />}
      </div>
    </div>
  );
}

export default MobileMenu;
