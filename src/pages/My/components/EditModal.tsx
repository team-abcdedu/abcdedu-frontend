import Modal from '@/components/Modal';

import { ProfileEditModalProps } from '../types';

// import EditAccount from './EditAccount';
import EditProfile from './EditProfile';

export default function EditModal({
  // type = 'profile',
  user,
  isVisible,
  onClose,
  onToggle,
}: ProfileEditModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose} enableBackdropClick={false}>
      <EditProfile user={user} onClose={onClose} onToggle={onToggle} />
    </Modal>
  );
}
