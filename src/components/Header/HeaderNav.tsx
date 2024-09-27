import { NavLink } from 'react-router-dom';

import Dropdown from '@/components/Dropdown';
import { adminNavItem, headerNavItems } from '@/constants/navItems';
import useBoundStore from '@/stores';
import { HeaderNavItem } from '@/types/navTypes';

function HeaderNav() {
  const linkStyle = 'text-13 font-bold';
  const navLinkStyle = (isActive: boolean) => {
    return isActive
      ? `${linkStyle} text-black`
      : `${linkStyle} text-neutral-300`;
  };
  const user = useBoundStore(state => state.user);

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
                  <NavLink
                    key={listItem.to}
                    to={listItem.to}
                    className={({ isActive }) => navLinkStyle(isActive)}
                  >
                    {listItem.text}
                  </NavLink>
                );
              })}
            </Dropdown>
          );
        }
        return null;
      })}
      {user && user.role === '관리자' && (
        <NavLink
          to={adminNavItem.to}
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          {adminNavItem.text}
        </NavLink>
      )}
    </div>
  );
}

export default HeaderNav;
