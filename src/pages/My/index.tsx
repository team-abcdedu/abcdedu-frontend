import { useState } from 'react';

import useModal from '@/hooks/useModal';

import EditModal from './components/EditModal';
import { MemberInfo, ProfileEditInfoType } from './types';

export default function MyPage() {
  const { isVisible, toggleModal } = useModal();

  // 임시
  const mockData: MemberInfo = {
    name: 'test',
    joinDate: '8/23/24',
    level: '씨앗',
    school: '양천고',
    studentId: '12345',
    email: 'test2@test.com',
    totalPost: 0,
    totalComment: 0,
    profileImg: '',
  };

  const [infoType, setInfoType] = useState<ProfileEditInfoType>('profile');

  const toggleModalType = () => {
    setInfoType(infoType === 'profile' ? 'account' : 'profile');
  };

  const bgColor = !mockData.profileImg && 'bg-primary-300/5';

  return (
    <div className='w-full max-w-screen-sm m-auto px-24 py-60 flex flex-col gap-20'>
      <EditModal
        type={infoType}
        isVisible={isVisible}
        onClose={toggleModal}
        onToggle={toggleModalType}
      />
      <div className='flex items-center gap-16'>
        <div
          className={`w-58 h-58 rounded-full overflow-hidden border-1 ${bgColor}`}
        >
          {mockData.profileImg && (
            <img src='' alt='profile-img' className='object-cover' />
          )}
        </div>
        <div className='flex-row-center'>
          <span className='text-primary-400 text-25 font-bold leading-[1.4]'>
            {mockData.name}
          </span>
          <span className='font-semibold'>&nbsp;님, 안녕하세요!</span>
        </div>
      </div>
      <span
        className='text-neutral-500 underline decoration-1 
        underline-offset-2 -mt-4 text-14'
      >
        계정 생성 일자: {mockData.joinDate}
      </span>
      <div className='[&_strong]:font-semibold [&>p]:pb-6'>
        <p>
          <strong>회원 등급:</strong> &nbsp;{mockData.level}
        </p>
        <p>
          <strong>소속 학교:</strong> &nbsp;{mockData.school}
        </p>
        <p>
          <strong>학번:</strong> &nbsp;{mockData.studentId}
        </p>
        <p>
          <strong>Email:</strong> &nbsp;{mockData.email}
        </p>
        <p>
          <strong>작성한 게시물 수:</strong> &nbsp;{mockData.totalPost}
        </p>
        <p>
          <strong>작성한 댓글 수: </strong>&nbsp;{mockData.totalComment}
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
