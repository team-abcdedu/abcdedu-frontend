import { useState } from 'react';

import UserLogin from '@/assets/icons/user-login.svg?react';
import AuthModal from '@/components/Header/AuthModal';
import useModal from '@/hooks/useModal';
import { AuthModalType } from '@/types/auth';

function HeaderButtons() {
  const btnStyle =
    'w-100 h-36 px-20 py-4 flex-row-center rounded-[20px] text-14';
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
    <div className={'flex flex-col items-center sm:flex-row gap-10'}>
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
    </div>
  );
}

export default HeaderButtons;
