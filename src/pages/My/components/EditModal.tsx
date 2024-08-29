import Modal from '@/components/Modal';

import { ProfileEditModalProps } from '../types';

import EditAccount from './EditAccount';
import EditProfile from './EditProfile';

export default function EditModal({
  type = 'profile',
  isVisible,
  onClose,
  onToggle,
}: ProfileEditModalProps) {
  const IS_PROFILE_MODAL = type === 'profile';

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      {IS_PROFILE_MODAL ? (
        <EditProfile onClose={onClose} onToggle={onToggle} />
      ) : (
        <EditAccount onClose={onClose} onToggle={onToggle} />
      )}
    </Modal>
  );
}
