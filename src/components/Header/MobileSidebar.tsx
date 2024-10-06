import HeaderButtons from '@/components/Header/HeaderButtons';
import MobileNav from '@/components/Header/MobileNav';
import { adminNavItem, headerNavItems } from '@/constants/navItems';
import useBoundStore from '@/stores';

function MobileSidebar() {
  const user = useBoundStore(state => state.user);

  return (
    <div
      id={'mobile-sidebar'}
      className={
        'absolute w-[300px] h-dvh top-[-25.76px] right-[-320px] pt-60 pb-30 flex-col-center gap-10 bg-white z-modal'
      }
    >
      <div className={'h-[15%] flex-row-center'}>
        <HeaderButtons />
      </div>
      <div className={'w-1/2 h-1 bg-neutral-200 mt-10'}></div>
      <nav className={'w-full h-[80%] relative overflow-hidden'}>
        <ul
          className={
            'relative w-full h-full px-30 py-20 flex flex-col gap-8 overflow-y-auto'
          }
        >
          {headerNavItems.map(item => (
            <MobileNav item={item} key={item.to} />
          ))}
          {user?.role === '관리자' && <MobileNav item={adminNavItem} />}
        </ul>
      </nav>
    </div>
  );
}

export default MobileSidebar;
