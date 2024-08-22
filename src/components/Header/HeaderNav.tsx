import { Link } from 'react-router-dom';

import Dropdown from '@/components/Dropdown';
import { headerNavItems } from '@/constants/navItems';
import { HeaderNavItem } from '@/types/navTypes';

function HeaderNav() {
  return (
    <>
      {headerNavItems.map((item: HeaderNavItem) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                'px-12 grid place-items-center min-h-40 max-h-46 hover:bg-primary-50'
              }
            >
              {item.text}
            </Link>
          );
        }
        if (item.type === 'dropdown') {
          return (
            <Dropdown
              key={item.to}
              defaultLabel={
                <Link to={item.to} className={'px-12'}>
                  {item.text}
                </Link>
              }
              defaultLabelStyle={'min-h-40 max-h-46 hover:bg-primary-50'}
            >
              {item.list?.map(listItem => {
                return (
                  <Link key={listItem.to} to={listItem.to} className={'px-12'}>
                    {listItem.text}
                  </Link>
                );
              })}
            </Dropdown>
          );
        }
        return null;
      })}
    </>
  );
}

export default HeaderNav;
