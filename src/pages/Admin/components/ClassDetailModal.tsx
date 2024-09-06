import { useEffect } from 'react';

import Modal from '@/components/Modal';

import { ClassTableData } from '../types';

import DetailModalHeader from './DetailModalHeader';

interface ClassDetailModalProps {
  classData: ClassTableData | null;
  isVisible: boolean;
  onClose: () => void;
}

function ClassDetailModal({
  classData,
  isVisible,
  onClose,
}: ClassDetailModalProps) {
  useEffect(() => {}, []);

  if (!classData) return null;

  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader
            list={{ ID: classData.id, 클래스명: classData.title }}
          />
          <div
            className={'h-[400px] p-5 border-2 border-neutral-300 rounded-sm'}
          >
            하위클래스 목록: {classData.list.join(', ')}
            설명 : {classData.description}
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
