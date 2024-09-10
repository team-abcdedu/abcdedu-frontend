import { useEffect } from 'react';

import Modal from '@/components/Modal';

import DetailModalHeader from '../../components/DetailModalHeader';
import { SurveyTableData } from '../../types';

interface SurveyDetailModalProps {
  survey: SurveyTableData | null;
  isVisible: boolean;
  onClose: () => void;
}

function SurveyDetailModal({
  survey,
  isVisible,
  onClose,
}: SurveyDetailModalProps) {
  useEffect(() => {}, []);

  if (!survey) return null;

  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader
            list={{
              ID: survey.id,
              제출일: survey.createdAt,
              클래스: survey.class,
              이름: survey.name,
            }}
          />
          <div
            className={'h-[400px] p-5 border-2 border-neutral-300 rounded-sm'}
          >
            설문답변
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

export default SurveyDetailModal;
