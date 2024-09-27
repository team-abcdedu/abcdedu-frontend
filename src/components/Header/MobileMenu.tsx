import { useState } from 'react';

import Backdrop from '@/components/Backdrop';
import MenuToggle from '@/components/Header/MenuToggle';
import MobileSidebar from '@/components/Header/MobileSidebar';
import useMenuAnimation from '@/hooks/useMenuAnimation';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className={'xl:hidden flex flex-end relative'}>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
      <MobileSidebar />
      <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
    </div>
  );
}

export default MobileMenu;
