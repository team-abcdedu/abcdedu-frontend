import HeaderButtons from './HeaderButtons';
import HeaderNav from './HeaderNav';

function HeaderMenu() {
  return (
    <div className={'hidden md:flex justify-between items-end'}>
      <HeaderNav />
      <HeaderButtons />
    </div>
  );
}

export default HeaderMenu;
