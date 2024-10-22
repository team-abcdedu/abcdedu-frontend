import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Backdrop from '@/components/Backdrop';
import MenuToggle from '@/components/Header/MenuToggle';
import MobileSidebar from '@/components/Header/MobileSidebar';
import useMenuAnimation from '@/hooks/useMenuAnimation';
import useBoundStore from '@/stores';

function MobileMenu() {
  const { pathname } = useLocation();
  const isSidebarOpen = useBoundStore(state => state.isSidebarOpen);
  const setIsSidebarOpen = useBoundStore(state => state.setIsSidebarOpen);

  const scope = useMenuAnimation(isSidebarOpen);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div ref={scope} className={'xl:hidden flex flex-end relative'}>
      {isSidebarOpen && <Backdrop onClick={() => setIsSidebarOpen(false)} />}
      <MobileSidebar />
      <MenuToggle toggle={() => setIsSidebarOpen(prev => !prev)} />
    </div>
  );
}

export default MobileMenu;
