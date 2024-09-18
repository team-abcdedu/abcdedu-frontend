import { Navigate, useParams } from 'react-router-dom';

import Head from '@/components/Head';
import useModal from '@/hooks/useModal';
import { mockPosts } from '@/mock/Community';

import List from './components/List';
import PostFormModal from './components/PostFormModal';
import { boardMetaData, Category } from './constants/communityInfo';

export default function Board() {
  const { isVisible, toggleModal } = useModal();

  const { category } = useParams();

  if (!category || !(category in boardMetaData)) {
    return <Navigate to='/community' replace />;
  }

  const { label } = boardMetaData[category as Category];

  return (
    <div className='flex flex-col text-center mt-20'>
      <Head title={`${label} | ABCDEdu`} />
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>{label}</h3>
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
        <PostFormModal isVisible={isVisible} onClose={toggleModal} />
      )}
      <List posts={mockPosts} />
    </div>
  );
}
