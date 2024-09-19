import { useEffect, useState } from 'react';

import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import { mockHomework } from '@/mock/homework';
import HomeworkFormBody from '@/pages/Homework/components/HomeworkFormBody';
import HomeworkFormHeader from '@/pages/Homework/components/HomeworkFormHeader';
import useHomeworkForm from '@/pages/Homework/hooks/useHomeworkForm';

interface HomeworkFormProps {
  homeworkId: number;
}

function HomeworkForm({ homeworkId }: HomeworkFormProps) {
  // const { data: myAnswers, isLoading, isError } = useGetMyHomework({ homeworkId });

  const { isVisible, toggleModal } = useModal();
  const [modalState, setModalState] = useState<'success' | 'error'>('success');

  const { register, errors, reset, onSubmit } = useHomeworkForm({
    homeworkId,
    setModalState,
    toggleModal,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  // if (isError || isLoading) {
  //   return (
  //     <div
  //       className={
  //         'w-full h-[600px] flex-row-center text-center text-30 bg-neutral-100'
  //       }
  //     >
  //       {isError ? '에러가 발생했습니다.' : '로딩 중입니다.'}
  //     </div>
  //   );
  // }

  return (
    <form className={'w-full h-full'} onSubmit={onSubmit}>
      <HomeworkFormHeader
        title={mockHomework.title}
        subTitle={mockHomework.subTitle}
        description={mockHomework.description}
      />

      <HomeworkFormBody
        questions={mockHomework.questionGetResponses}
        register={register}
        errors={errors}
      />

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={modalState === 'success' ? 'success' : 'error'}
        message={
          modalState === 'success'
            ? '과제 제출되었습니다.'
            : '과제 제출 중 문제가 발생했습니다.'
        }
      />
    </form>
  );
}

export default HomeworkForm;
