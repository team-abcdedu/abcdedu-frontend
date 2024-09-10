import { useEffect } from 'react';

import Modal from '@/components/Modal';

import DetailModalHeader from '../../components/DetailModalHeader';
import { AssignmentTableData } from '../../types';

interface AssignmentDetailModalProps {
  assignment: AssignmentTableData | null;
  isVisible: boolean;
  onClose: () => void;
}

function AssignmentDetailModal({
  assignment,
  isVisible,
  onClose,
}: AssignmentDetailModalProps) {
  useEffect(() => {}, []);

  if (!assignment) return null;

  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader
            list={{
              ID: assignment.id,
              제출일: assignment.createdAt,
              이름: assignment.name,
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
