import CheckCircle from '@/assets/icons/check-circle.svg?react';
import ExclamationMark from '@/assets/icons/exclamation-mark.svg?react';
import Modal from '@/components/Modal';

interface MessageModalProps {
  isVisible: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

function MessageModal({
  isVisible,
  onClose,
  type,
  message,
}: MessageModalProps) {
  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'py-20 flex-col-center gap-20'}>
          {type === 'success' ? (
            <CheckCircle className={'w-55 h-55 text-primary-300'} />
          ) : (
            <ExclamationMark className={'w-55 h-55 text-primary-300'} />
          )}

          <div className={'text-18 font-semibold'}>{message}</div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default MessageModal;
