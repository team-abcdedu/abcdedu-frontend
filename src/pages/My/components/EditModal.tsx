import Modal from '@/components/Modal';

import { ProfileEditModalProps } from '../types';

import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';

export default function EditModal({
  type = 'profile',
  user,
  isVisible,
  onClose,
}: ProfileEditModalProps) {
  return (
    <Modal isVisible={isVisible}>
      {type === 'profile' ? (
        <EditProfile user={user} onClose={onClose} />
      ) : (
        <ChangePassword onClose={onClose} />
      )}
    </Modal>
  );
}
