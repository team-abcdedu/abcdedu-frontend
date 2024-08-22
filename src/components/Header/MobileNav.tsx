import { Link } from 'react-router-dom';

import HeaderButtons from '@/components/Header/HeaderButtons';
import { mobileMenuNavItems } from '@/constants/navItems';
import { MobileMenuNavItem } from '@/types/navTypes';

function MobileNav() {
  return (
    <div className={'absolute bg-white right-16 rounded-md'}>
      <li className={`flex flex-col gap-8 px-16 py-8 my-12 bg-white`}>
        {mobileMenuNavItems.map((item: MobileMenuNavItem) => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                'min-w-218 min-h-32 grid place-items-center text-15 px-12 hover:bg-slate-200'
              }
            >
              {item.text}
            </Link>
          );
        })}
        <HeaderButtons mobile={true} />
      </li>
    </div>
  );
}

export default MobileNav;
