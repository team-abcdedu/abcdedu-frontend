import HeaderButtons from '@/components/Header/HeaderButtons';
import HeaderNav from '@/components/Header/HeaderNav';

function HeaderMenu() {
  return (
    <div className={'hidden sm:flex justify-between items-end'}>
      <HeaderNav />
      <HeaderButtons />
    </div>
  );
}

export default HeaderMenu;
