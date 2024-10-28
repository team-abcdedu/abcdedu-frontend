import { Navigate } from 'react-router-dom';

import Head from '@/components/Head';
import useModal from '@/hooks/useModal';

import PasswordModal from './components/PasswordModal';
import ProfileInfo from './components/ProfileInfo';
import ProfileLoading from './components/ProfileLoading';
import ProfileModal from './components/ProfileModal';
import useGetProfile from './hooks/useGetProfile';

export default function MyPage() {
  const { isVisible: isProfileVisible, toggleModal: toggleProfileModal } =
    useModal();
  const { isVisible: isPwModalVisible, toggleModal: togglePwModal } =
    useModal();

  const { user, isLoading } = useGetProfile();

  if (isLoading) return <ProfileLoading />;
  if (!user) return <Navigate to='/' replace />;

  return (
    <div className='w-full max-w-screen-sm m-auto px-24 py-60'>
      <Head title='마이페이지 | ABCDEdu' />
      <ProfileModal
        user={user}
        isVisible={isProfileVisible}
        onClose={toggleProfileModal}
      />
      <PasswordModal isVisible={isPwModalVisible} onClose={togglePwModal} />
      <ProfileInfo user={user} />
      <div className=' flex flex-col gap-12 mt-56'>
        <button
          type='button'
          className='w-150 m-auto px-16 py-8 rounded-full 
      bg-primary-400 text-white font-semibold'
          onClick={toggleProfileModal}
        >
          정보 수정하기
        </button>
        <button
          type='button'
          className='w-150 m-auto px-16 py-8 rounded-full btn-white-pb text-primary-400'
          onClick={togglePwModal}
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  );
}
