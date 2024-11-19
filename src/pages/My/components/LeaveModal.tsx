import MessageModal from '@/components/MessageModal';
import Modal from '@/components/Modal';

import useLeave from '../hooks/useLeave';

interface LeaveModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LeaveModal({ isVisible, onClose }: LeaveModalProps) {
  const {
    handleLeaveClick,
    isMessageModalVisible,
    messageModalType,
    resultMessage,
    handleMessageModalClose,
  } = useLeave({ onSuccess: onClose });

  return (
    <>
      <Modal size='xs' isVisible={isVisible}>
        <Modal.Content>
          <p className='text-center'>
            회원 탈퇴 시 계정 복구가 불가능합니다.
            <br />
            정말 탈퇴하시겠습니까?
          </p>
        </Modal.Content>
        <Modal.Actions direction='row'>
          <button
            className='w-full h-45 text-15 
        text-primary-400 btn-white-pb font-semibold rounded-md'
            onClick={onClose}
          >
            취소
          </button>
          <button
            className='w-full h-45 bg-primary-400 text-15 
        text-white font-semibold rounded-md'
            onClick={handleLeaveClick}
          >
            탈퇴하기
          </button>
        </Modal.Actions>
      </Modal>
      <MessageModal
        backdrop={false}
        isVisible={isMessageModalVisible}
        onClose={handleMessageModalClose}
        type={messageModalType}
        message={resultMessage}
      />
    </>
  );
}
