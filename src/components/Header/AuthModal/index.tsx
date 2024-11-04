import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import useBoundStore from '@/stores';
import { AuthModalProps } from '@/types/auth';

import Login from './Login';
import Register from './Register';

export default function AuthModal({ isVisible, onClose }: AuthModalProps) {
  const { authModalType, resetVerificationState } = useBoundStore(state => ({
    authModalType: state.authModalType,
    resetVerificationState: state.resetVerificationState,
  }));

  const handleClose = () => {
    if (authModalType === 'register') resetVerificationState();
    onClose();
  };

  return (
    <Modal isVisible={isVisible}>
      <Modal.Header>
        <button
          type='button'
          className='block ml-auto mt-4 p-2'
          onClick={handleClose}
        >
          <X size={24} />
        </button>
      </Modal.Header>
      {authModalType === 'login' && <Login onSuccess={onClose} />}
      {authModalType === 'register' && <Register />}
    </Modal>
  );
}
