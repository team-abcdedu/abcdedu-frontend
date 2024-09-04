import { Link } from 'react-router-dom';

import { mobileMenuNavItems } from '@/constants/navItems';
import { MobileMenuNavItem } from '@/types/navTypes';

import HeaderButtons from './HeaderButtons';

interface MobileNavProps {
  onClick: () => void;
}

function MobileNav({ onClick }: MobileNavProps) {
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
        <HeaderButtons />
      </li>
    </div>
  );
}

export default MobileNav;
