import { Link, NavLink } from 'react-router-dom';

import { adminNavItem, mobileMenuNavItems } from '@/constants/navItems';
import useBoundStore from '@/stores';
import { MobileMenuNavItem } from '@/types/navTypes';

import HeaderButtons from './HeaderButtons';

interface MobileNavProps {
  onClick: () => void;
}

function MobileNav({ onClick }: MobileNavProps) {
  const user = useBoundStore(state => state.user);

  return (
    <div className={'absolute right-16 rounded-md bg-white'}>
      <li className={`flex flex-col gap-8 px-16 py-8 my-12 bg-white`}>
        {mobileMenuNavItems.map((item: MobileMenuNavItem) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                'min-w-200 min-h-32 grid place-items-center text-15 px-12 hover:bg-primary-50'
              }
              onClick={onClick}
            >
              {item.text}
            </Link>
          );
        })}
        {user && user.role === '새싹' && (
          <NavLink
            to={adminNavItem.to}
            className={
              'min-w-200 min-h-32 grid place-items-center text-15 px-12 hover:bg-primary-50'
            }
          >
            {adminNavItem.text}
          </NavLink>
        )}
        <HeaderButtons />
      </li>
    </div>
  );
}

export default MobileNav;
