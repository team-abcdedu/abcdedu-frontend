import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';

import Backdrop from '@/components/Backdrop';

interface PostActionsProps {
  id: number;
  onEdit: () => void;
}

export default function PostActions({ id, onEdit }: PostActionsProps) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const handleEditClick = () => {
    toggleMenu();
    onEdit();
  };

  const handleDelete = () => {
    toggleMenu();
    const ok = window.confirm('게시글을 삭제하시겠습니까?');
    if (ok) {
      console.log(id);
      // TODO: 삭제
    }
  };

  return (
    <div className='relative'>
      <button className='block' onClick={toggleMenu}>
        <DotsThreeVertical size={20} />
      </button>
      {menuVisible && (
        <>
          <Backdrop isDark={false} onClick={toggleMenu} />
          <div className='absolute right-8 mt-2 w-80 bg-white shadow-lg z-[101] rounded-lg border'>
            <button
              onClick={handleEditClick}
              className='block w-full py-6 text-sm text-gray-700 hover:bg-gray-100'
            >
              수정
            </button>
            <hr />
            <button
              onClick={handleDelete}
              className='block w-full px-4 py-6 text-sm text-red-600 hover:bg-gray-100'
            >
              삭제
            </button>
          </div>
        </>
      )}
    </div>
  );
}
