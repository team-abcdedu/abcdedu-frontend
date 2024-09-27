import HeaderButtons from '@/components/Header/HeaderButtons';
import MobileNav from '@/components/Header/MobileNav';
import { adminNavItem, headerNavItems } from '@/constants/navItems';
import useBoundStore from '@/stores';

function MobileSidebar() {
  const { user } = useBoundStore();

  return (
    <div
      id={'mobile-sidebar'}
      className={
        'absolute w-[200px] h-dvh top-[-25.76px] right-[-220px] pt-60 pb-30 flex flex-col gap-20 bg-white z-modal'
      }
    >
      <nav className={'w-full h-[85%] relative overflow-hidden'}>
        <ul
          className={
            'relative w-full h-full px-30 py-20 flex flex-col gap-8 overflow-scroll'
          }
        >
          {headerNavItems.map(item => (
            <MobileNav item={item} key={item.to} />
          ))}
          {user?.role === '관리자' && <MobileNav item={adminNavItem} />}
        </ul>
      </nav>
      <HeaderButtons />
    </div>
  );
}

export default MobileSidebar;
