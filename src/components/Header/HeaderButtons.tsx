import { useState } from 'react';
import { Link } from 'react-router-dom';

import UserLogin from '@/assets/icons/user-login.svg?react';
import AuthModal from '@/components/Header/AuthModal';
import useLogout from '@/hooks/auth/useLogout';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';
import { AuthModalType } from '@/types/auth';

const btnStyle =
  'w-120 xl:w-100 h-46 xl:h-36 px-20 py-4 rounded-[20px] text-18 xl:text-14';

function AuthButton() {
  const user = useBoundStore(state => state.user);

  return (
    <>
      <UserLogin className={'w-36 h-36 xl:w-30 xl:h-30'} />
      <div
        className={
          'w-fit h-46 xl:h-36 px-20 xl:px-14 py-4 xl:py-0 flex-row-center text-18 xl:text-14 font-semibold text-primary-400'
        }
      >
        {user ? user.name : '로그인'}
      </div>
    </>
  );
}

function MemberButtons() {
  const { handleLogout } = useLogout();
  const setIsSidebarOpen = useBoundStore(state => state.setIsSidebarOpen);

  const handleClick = () => {
    handleLogout();
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Link className={'flex w-fit h-36 items-center'} to='/mypage'>
        <AuthButton />
      </Link>
      <button
        className={`${btnStyle} flex-row-center bg-primary-400 text-18 xl:text-14 text-white`}
        onClick={handleClick}
      >
        로그아웃
      </button>
    </>
  );
}

function GuestButtons() {
  const { isVisible, toggleModal } = useModal();
  const [modalType, setModalType] = useState<AuthModalType>('login');
  const setIsSidebarOpen = useBoundStore(state => state.setIsSidebarOpen);

  const handleClick = (type: AuthModalType) => {
    toggleModal();
    setModalType(type);
  };

  const handleClose = () => {
    toggleModal();
    setIsSidebarOpen(false);
  };

  const toggleModalType = () => {
    setModalType(modalType === 'login' ? 'register' : 'login');
  };

  return (
    <>
      <button
        className={'flex w-130 xl:w-100 h-36 items-center gap-4'}
        onClick={() => handleClick('login')}
      >
        <AuthButton />
      </button>
      <button
        className={`hidden xl:block ${btnStyle} bg-primary-400 text-white w-full`}
        onClick={() => handleClick('register')}
      >
        회원가입
      </button>
      <AuthModal
        type={modalType}
        isVisible={isVisible}
        onClose={handleClose}
        onToggle={toggleModalType}
      />
    </>
  );
}

function HeaderButtons() {
  const user = useBoundStore(state => state.user);

  return (
    <div className={'flex flex-col items-center xl:flex-row gap-10'}>
      {user ? <MemberButtons /> : <GuestButtons />}
    </div>
  );
}

export default HeaderButtons;
