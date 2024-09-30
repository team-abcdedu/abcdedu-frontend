import Modal from '@/components/Modal';
import { AuthModalProps } from '@/types/auth';

import Login from './Login';
import Register from './Register';

export default function AuthModal({
  type = 'login',
  isVisible,
  onClose,
  onToggle,
}: AuthModalProps) {
  const IS_LOGIN_MODAL = type === 'login';

  return (
    <Modal isVisible={isVisible}>
      {IS_LOGIN_MODAL ? (
        <Login onToggle={onToggle} onClose={onClose} />
      ) : (
        <Register onToggle={onToggle} onClose={onClose} />
      )}
    </Modal>
  );
}
