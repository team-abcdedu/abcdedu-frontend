import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Backdrop from '@/components/Backdrop';
import MenuToggle from '@/components/Header/MenuToggle';
import MobileSidebar from '@/components/Header/MobileSidebar';
import useMenuAnimation from '@/hooks/useMenuAnimation';

function MobileMenu() {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div ref={scope} className={'xl:hidden flex flex-end relative'}>
      {isOpen && <Backdrop onClick={() => setIsOpen(prev => !prev)} />}
      <MobileSidebar />
      <MenuToggle toggle={() => setIsOpen(prev => !prev)} />
    </div>
  );
}

export default MobileMenu;
