import HeaderButtons from '@/components/Header/HeaderButtons';
import HeaderNav from '@/components/Header/HeaderNav';

function HeaderMenu() {
  return (
    <div className={'hidden md:flex flex-end gap-12'}>
      <HeaderNav />
      <HeaderButtons mobile={false} />
    </div>
  );
}

export default HeaderMenu;
