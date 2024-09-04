import { useState } from 'react';
import { Link } from 'react-router-dom';

import UserLogin from '@/assets/icons/user-login.svg?react';
import AuthModal from '@/components/Header/AuthModal';
import useLogout from '@/hooks/auth/useLogout';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';
import { AuthModalType } from '@/types/auth';

const btnStyle = 'w-100 h-36 px-20 py-4 flex-row-center rounded-[20px] text-14';

function MemberButtons({ name }: { name: string }) {
  const { handleLogout } = useLogout();
  return (
    <>
      <Link
        className={'hidden sm:flex w-fit h-36 text-14 items-center gap-4'}
        to='/mypage'
      >
        <UserLogin className={'w-30 h-30'} />
        <div
          className={
            'w-fit h-36 flex-row-center text-14 font-semibold text-primary-400'
          }
        >
          {name}
        </div>
      </Link>
      <button
        className={`${btnStyle} bg-primary-400 text-white`}
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </>
  );
}

function GuestButtons() {
  const { isVisible, toggleModal } = useModal();
  const [modalType, setModalType] = useState<AuthModalType>('login');

  const handleClick = (type: AuthModalType) => {
    toggleModal();
    setModalType(type);
  };

  const toggleModalType = () => {
    setModalType(modalType === 'login' ? 'register' : 'login');
  };

  return (
    <>
      <button
        className={'hidden sm:flex w-100 h-36 text-14 items-center gap-4'}
        onClick={() => handleClick('login')}
      >
        <UserLogin className={'w-30 h-30'} />
        <div
          className={
            'w-64 h-36 flex-row-center text-14 font-semibold text-primary-400'
          }
        >
          로그인
        </div>
      </button>
      <button
        className={`block sm:hidden ${btnStyle} btn-white-pb`}
        onClick={() => handleClick('login')}
      >
        로그인
      </button>
      <button
        className={`${btnStyle} bg-primary-400 text-white`}
        onClick={() => handleClick('register')}
      >
        회원가입
      </button>
      <AuthModal
        type={modalType}
        isVisible={isVisible}
        onClose={toggleModal}
        onToggle={toggleModalType}
      />
    </>
  );
}

function HeaderButtons() {
  const user = useBoundStore(state => state.user);

  return (
    <div className={'flex flex-col items-center sm:flex-row gap-10'}>
      {user ? <MemberButtons name={user.name} /> : <GuestButtons />}
    </div>
  );
}

export default HeaderButtons;
