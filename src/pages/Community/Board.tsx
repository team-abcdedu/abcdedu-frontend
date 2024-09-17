import { Navigate, useParams } from 'react-router-dom';

import useModal from '@/hooks/useModal';
import { mockPosts } from '@/mock/Community';

import List from './components/List';
import WritePostModal from './components/WritePostModal';
import { boardTitle, BoardType } from './constants/communityInfo';

export default function Board() {
  const { isVisible, toggleModal } = useModal();

  const { category } = useParams();

  if (!category || !(category in boardTitle)) {
    return <Navigate to='/community' replace />;
  }

  return (
    <div className='flex flex-col text-center mt-20'>
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>
          {boardTitle[category as BoardType]}
        </h3>
      </div>

      <div className='flex flex-row w-full justify-end px-20 py-10'>
        <button
          onClick={toggleModal}
          className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
        >
          글쓰기
        </button>
      </div>
      {isVisible && (
        <WritePostModal
          isVisible={isVisible}
          onClose={toggleModal}
          boardId={1}
        />
      )}
      <List posts={mockPosts} />
    </div>
  );
}
