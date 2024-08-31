import Modal from '@/components/Modal';

import { ProfileEditModalProps } from '../types';

// import EditAccount from './EditAccount';
import EditProfile from './EditProfile';

export default function EditModal({
  // type = 'profile',
  isVisible,
  onClose,
  onToggle,
}: ProfileEditModalProps) {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <EditProfile onClose={onClose} onToggle={onToggle} />
    </Modal>
  );
}
