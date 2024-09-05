import { useEffect } from 'react';

import Modal from '@/components/Modal';

import { ClassTableData } from '../types';

import DetailModalHeader from './DetailModalHeader';

interface ClassDetailModalProps {
  classData: ClassTableData;
  isVisible: boolean;
  onClose: () => void;
}

function ClassDetailModal({
  classData: { id, list, title, description },
  isVisible,
  onClose,
}: ClassDetailModalProps) {
  useEffect(() => {}, []);
  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader list={{ ID: id, 클래스명: title }} />
          <div
            className={'h-[400px] p-5 border-2 border-neutral-300 rounded-sm'}
          >
            하위클래스 목록: {list.join(', ')}
            설명 : {description}
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button type={'button'} onClick={onClose}>
          닫기
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default ClassDetailModal;
