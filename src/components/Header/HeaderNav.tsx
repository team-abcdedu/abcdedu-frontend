import { Link, NavLink } from 'react-router-dom';

import Dropdown from '@/components/Dropdown';
import { headerNavItems } from '@/constants/navItems';
import { HeaderNavItem } from '@/types/navTypes';

function HeaderNav() {
  const linkStyle = 'text-13 font-bold';
  const navLinkStyle = (isActive: boolean) => {
    return isActive
      ? `${linkStyle} text-black`
      : `${linkStyle} text-neutral-300`;
  };

  return (
    <div className={'flex items-center gap-40'}>
      {headerNavItems.map((item: HeaderNavItem) => {
        if (item.type === 'link') {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => navLinkStyle(isActive)}
            >
              {item.text}
            </NavLink>
          );
        }
        if (item.type === 'dropdown') {
          return (
            <Dropdown
              key={item.to}
              defaultLabel={
                <NavLink
                  to={item.to}
                  className={({ isActive }) => navLinkStyle(isActive)}
                >
                  {item.text}
                </NavLink>
              }
            >
              {item.list?.map(listItem => {
                return (
                  <Link
                    key={listItem.to}
                    to={listItem.to}
                    className={`${linkStyle}`}
                  >
                    {listItem.text}
                  </Link>
                );
              })}
            </Dropdown>
          );
        }
        return null;
      })}
    </div>
  );
}

export default HeaderNav;
