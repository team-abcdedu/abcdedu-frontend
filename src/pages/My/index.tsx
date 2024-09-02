import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import useModal from '@/hooks/useModal';

import EditModal from './components/EditModal';
import ProfileLoading from './components/ProfileLoading';
import useGetProfile from './hooks/useGetProfile';
import { ProfileEditInfoType } from './types';

export default function MyPage() {
  const { isVisible, toggleModal } = useModal();
  const { user, isLoading } = useGetProfile();

  const [infoType, setInfoType] = useState<ProfileEditInfoType>('profile');

  const toggleModalType = () => {
    setInfoType(infoType === 'profile' ? 'account' : 'profile');
  };

  const handleClose = () => {
    toggleModal();
    setInfoType('profile'); // 프로필 수정 모달로 초기화
  };

  if (isLoading) return <ProfileLoading />;
  if (!user) return <Navigate to='/' replace />;

  const bgColor = !user.imageUrl && 'bg-primary-300/5';
  return (
    <div className='w-full max-w-screen-sm m-auto px-24 py-60 flex flex-col gap-20'>
      <EditModal
        type={infoType}
        user={user}
        isVisible={isVisible}
        onClose={handleClose}
        onToggle={toggleModalType}
      />
      <div className='flex items-center gap-16'>
        <div
          className={`w-58 h-58 rounded-full overflow-hidden border-1 ${bgColor}`}
        >
          {user.imageUrl && (
            <img
              src={user.imageUrl}
              alt='profile-img'
              className='object-cover'
            />
          )}
        </div>
        <div className='flex-row-center'>
          <span className='text-primary-400 text-25 font-bold leading-[1.4]'>
            {user.name}
          </span>
          <span className='font-semibold'>&nbsp;님, 안녕하세요!</span>
        </div>
      </div>
      <span
        className='text-neutral-500 underline decoration-1 
        underline-offset-2 -mt-4 text-14'
      >
        계정 생성 일자: {user.createdAt.split('T')[0]}
      </span>
      <div className='[&_strong]:font-semibold [&>p]:pb-6'>
        <p>
          <strong>회원 등급:</strong> &nbsp;{user.role}
        </p>
        <p>
          <strong>소속 학교:</strong> &nbsp;{user.school}
        </p>
        <p>
          <strong>학번:</strong> &nbsp;{user.studentId}
        </p>
        <p>
          <strong>Email:</strong> &nbsp;{user.email}
        </p>
        <p>
          <strong>작성한 게시물 수:</strong> &nbsp;{user.createPostCount}
        </p>
        <p>
          <strong>작성한 댓글 수: </strong>&nbsp;{user.createCommentCount}
        </p>
      </div>
      <button
        type='button'
        className='w-150 m-auto mt-36 px-16 py-8 rounded-full 
      bg-primary-400 text-white font-semibold'
        onClick={toggleModal}
      >
        정보 수정하기
      </button>
    </div>
  );
}
