import { useEffect } from 'react';

import Modal from '@/components/Modal';

import { AssignmentTableData } from '../types';

import DetailModalHeader from './DetailModalHeader';

interface AssignmentDetailModalProps {
  assignment: AssignmentTableData;
  isVisible: boolean;
  onClose: () => void;
}

function AssignmentDetailModal({
  assignment: { id, createdAt, name },
  isVisible,
  onClose,
}: AssignmentDetailModalProps) {
  useEffect(() => {}, []);
  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader
            list={{
              ID: id,
              제출일: createdAt,
              이름: name,
            }}
          />
          <div
            className={'h-[400px] p-5 border-2 border-neutral-300 rounded-sm'}
          >
            과제답변
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

export default AssignmentDetailModal;
