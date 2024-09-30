import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';

import Backdrop from '@/components/Backdrop';

interface MoreButtonProps {
  iconSize?: 'sm' | 'md';
  onEdit: () => void;
  onDelete: () => void;
}

export default function MoreButton({
  iconSize = 'md',
  onEdit,
  onDelete,
}: MoreButtonProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const handleEdit = () => {
    toggleMenu();
    onEdit();
  };

  const handleDelete = () => {
    toggleMenu();
    onDelete();
  };

  return (
    <div className='relative'>
      <button
        className={`block ${iconSize === 'sm' && 'px-2'}`}
        onClick={toggleMenu}
      >
        <DotsThreeVertical size={iconSize === 'sm' ? 16 : 20} />
      </button>
      {menuVisible && (
        <>
          <Backdrop isDark={false} onClick={toggleMenu} />
          <div className='absolute right-8 mt-2 w-120 bg-white shadow-lg z-modal rounded-lg border'>
            <button
              aria-label='더보기'
              onClick={handleEdit}
              className='block w-full py-10 text-base text-gray-700 hover:bg-gray-100'
            >
              수정하기
            </button>
            <hr />
            <button
              onClick={handleDelete}
              className='block w-full px-4 py-10 text-base text-red-600 hover:bg-gray-100'
            >
              삭제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
