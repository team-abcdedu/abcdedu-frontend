import { useState } from 'react';

import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import { mockSurvey } from '@/mock/Survey';
import SurveyFormBody from '@/pages/Survey/components/SurveyFormBody';
import SurveyFormHeader from '@/pages/Survey/components/SurveyFormHeader';
import useSurveyForm from '@/pages/Survey/hooks/useSurveyForm';

interface SurveyFormProps {
  surveyId: number;
}

function SurveyForm({ surveyId }: SurveyFormProps) {
  const { isVisible, toggleModal } = useModal();
  const [modalState, setModalState] = useState<'success' | 'error'>('success');
  const { register, errors, onSubmit } = useSurveyForm({
    surveyId,
    toggleModal,
    setModalState,
  });

  return (
    <form onSubmit={onSubmit} className={'w-full'}>
      <SurveyFormHeader
        title={mockSurvey.title}
        description={mockSurvey.description}
      />

      <SurveyFormBody
        questions={mockSurvey.questionGetResponses}
        register={register}
        errors={errors}
      />

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={modalState === 'success' ? 'success' : 'error'}
        message={
          modalState === 'success'
            ? '설문 제출이 완료되었습니다.'
            : '설문 제출 중 문제가 발생했습니다.'
        }
      />
    </form>
  );
}

export default SurveyForm;
