import ExclamationMark from '@/assets/icons/exclamation-mark.svg?react';
import Modal from '@/components/Modal';

interface AccessDeniedModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function AccessDeniedModal({ isVisible, onClose }: AccessDeniedModalProps) {
  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'py-20 flex-col-center gap-20'}>
          <ExclamationMark className={'w-55 h-55 text-primary-300'} />
          <div className={'text-18 font-semibold'}>
            이론 자료는 관리자만 이용 가능합니다.
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default AccessDeniedModal;
