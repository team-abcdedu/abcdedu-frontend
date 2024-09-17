import { DownloadSimple } from '@phosphor-icons/react';
import { Navigate, useParams } from 'react-router-dom';

import useModal from '@/hooks/useModal';
import { mockPost } from '@/mock/Community';
import useBoundStore from '@/stores';

import LevelUpButton from './components/LevelUpButton';
import PostActions from './components/PostActions';
import PostFormModal from './components/PostFormModal';
import { boardMetaData } from './constants/communityInfo';

const data = mockPost;

export default function PostDetails() {
  const { isVisible: isEditModalVisible, toggleModal: toggleEditModal } =
    useModal();
  const { category } = useParams();
  const user = useBoundStore(state => state.user);

  if (!category || !(category in boardMetaData))
    return <Navigate to='/community' replace />;

  if (!data) {
    alert('게시글 정보를 찾을 수 없습니다.');
    return <Navigate to={`/community/${category}`} replace />;
  }

  // 등업 게시판 & 관리자 권한일 경우에만 등업시키기 버튼 렌더링
  const isLevelUpButtonVisible =
    user && user.role === '관리자' && category === 'levelup';

  return (
    <div className='text-left mt-10'>
      <hr className='border-1 border-black w-full' />
      <div className='flex flex-col sm:flex-row justify-between px-20 py-4 sm:py-10 bg-gray-100 relative'>
        <h2 className='text-20 font-bold'>{data.title}</h2>
      </div>
      <hr className='border-1 border-gray-300 w-full' />
      <div className='flex justify-between px-10 md:px-20 py-10 flex-wrap gap-y-6'>
        <div className='flex-row-center space-x-16 shrink-0'>
          <p className=' text-primary-400 relative text-sm pipe-after'>
            {data.writer}
          </p>
          <p className='text-gray-400 relative text-sm pipe-after'>{`${data.createdAt.split('T')[0]}`}</p>
          <p className='text-gray-400 text-sm'>{`조회 ${data.viewCount}`}</p>
        </div>
        <div className='flex items-center gap-12 ml-auto'>
          <button>
            <p className='flex-row-center gap-4 text-sm text-gray-500'>
              파일 다운받기
              <DownloadSimple className='mt-1 block' size={17} />
            </p>
          </button>
          <PostActions id={data.postId} onEdit={toggleEditModal} />
        </div>
      </div>
      <hr className='border-1 border-gray-300 w-full' />
      <p className='px-20 my-100'>{data.content}</p>
      <hr className='border-1 border-gray-300 w-full' />
      {isLevelUpButtonVisible && <LevelUpButton />}
      <PostFormModal
        post={data}
        isVisible={isEditModalVisible}
        onClose={toggleEditModal}
      />
    </div>
  );
}
