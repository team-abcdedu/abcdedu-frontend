import { useState } from 'react';

import useModal from '@/hooks/useModal';
import { AuthModalType } from '@/types/auth';

import AuthModal from '../AuthModal';

interface HeaderButtonsProps {
  mobile: boolean;
}

function HeaderButtons(props: HeaderButtonsProps) {
  const { mobile } = props;

  const headerBtnStyle = mobile
    ? 'min-w-218 min-h-40 w-auto text-15 px-12 rounded'
    : 'px-24 min-h-40 max-h-46 grid place-items-center rounded-md';

  const { isVisible, toggleModal } = useModal();
  const [modalType, setModalType] = useState<AuthModalType>('register');

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
        onClick={() => handleClick('login')}
        className={`${headerBtnStyle} border-1 border-blue-800 text-blue-800 hover:bg-primary-50`}
      >
        로그인
      </button>
      <button
        onClick={() => handleClick('register')}
        className={`${headerBtnStyle} bg-blue-800 text-white hover:opacity-80`}
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

export default HeaderButtons;
