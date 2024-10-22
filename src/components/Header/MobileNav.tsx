import { CaretDown } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useBoundStore from '@/stores';
import { NavItem } from '@/types/navTypes';

const listVariants = {
  open: {
    opacity: 1,
    height: 'fit-content',
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

interface MobileNavProps {
  item: NavItem;
}

function MobileNav({ item }: MobileNavProps) {
  const [listOpen, setListOpen] = useState(false);

  const navLinkStyle = (isActive: boolean) => {
    return isActive ? `text-primary-400 font-medium` : `text-neutral-400`;
  };

  const isSidebarOpen = useBoundStore(state => state.isSidebarOpen);

  useEffect(() => {
    if (!isSidebarOpen) {
      setListOpen(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className={'w-full h-fit text-20'}>
      <div className={'w-full p-5 flex justify-between'}>
        <NavLink
          to={item.to}
          key={item.to}
          className={({ isActive }) => navLinkStyle(isActive)}
        >
          {item.text}
        </NavLink>
        <AnimatePresence>
          {item.list && (
            <button onClick={() => setListOpen(prev => !prev)}>
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.4 }}
                animate={listOpen ? 'open' : 'closed'}
              >
                <CaretDown className={'w-25 h-25'} />
              </motion.div>
            </button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {item.list && listOpen && (
          <ul className={`flex flex-col`}>
            {item.list?.map(listItem => (
              <motion.li
                key={listItem.to}
                initial={'closed'}
                variants={listVariants}
                animate={listOpen ? 'open' : 'closed'}
                exit={'closed'}
                transition={{ duration: 0.4, ease: [0.01, 0.52, 0.4, 0.98] }}
                className={'flex'}
              >
                <NavLink
                  to={listItem.to}
                  className={({ isActive }) =>
                    `${navLinkStyle(isActive)} px-20 pb-5 font-light`
                  }
                  end
                >
                  {listItem.text}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
