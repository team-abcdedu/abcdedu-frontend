import { X } from '@phosphor-icons/react';

import CheckCircle from '@/assets/icons/check-circle.svg?react';
import ExclamationMark from '@/assets/icons/exclamation-mark.svg?react';
import Modal from '@/components/Modal';

interface MessageModalProps {
  isVisible: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
  backdrop?: boolean;
}

function MessageModal({
  isVisible,
  onClose,
  type,
  message,
  backdrop = true,
}: MessageModalProps) {
  return (
    <Modal
      showBackdrop={backdrop}
      size={'sm'}
      isVisible={isVisible}
      onClose={onClose}
    >
      <Modal.Header>
        <button
          type='button'
          aria-label='닫기'
          className='block ml-auto mt-4 p-2'
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </Modal.Header>
      <Modal.Content>
        <div className={'-mt-16 pb-20 flex-col-center gap-20'}>
          {type === 'success' ? (
            <CheckCircle className={'w-55 h-55 text-primary-300'} />
          ) : (
            <ExclamationMark className={'w-55 h-55 text-primary-300'} />
          )}

          <div className='text-18 font-semibold whitespace-pre-line text-center'>
            {message}
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default MessageModal;
