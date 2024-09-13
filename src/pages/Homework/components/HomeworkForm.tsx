import { useEffect, useState } from 'react';

import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import UserInput from '@/pages/Homework/components/UserInput';
import { mockAnswer } from '@/pages/Homework/constants';
// import useGetMyHomework from '@/pages/Homework/hooks/useGetMyHomework';
import useHomeworkForm from '@/pages/Homework/hooks/useHomeworkForm';
import { QuestionInfo } from '@/types/homework';

interface HomeworkFormProps {
  homeworkId: number;
  questions: QuestionInfo[];
  additionalDescription: string;
  showScore: boolean;
}

function HomeworkForm({
  homeworkId,
  questions,
  additionalDescription,
  showScore,
}: HomeworkFormProps) {
  // const { data: myAnswers, isLoading, isError } = useGetMyHomework({ homeworkId });
  const isError = false;
  const isLoading = false;
  const myAnswers = mockAnswer;
  // const myAnswers = [];

  const { isVisible, toggleModal } = useModal();
  const [successModal, setSuccessModal] = useState<boolean>(false);

  const formTextStyle = 'text-16 md:text-20 whitespace-pre-wrap';
  const buttonBgStyle =
    myAnswers && myAnswers.length > 0 ? 'bg-neutral-300' : 'bg-primary-300';

  const { register, errors, reset, onSubmit } = useHomeworkForm({
    homeworkId,
    questions,
    setSuccessModal,
    toggleModal,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  if (isError || isLoading) {
    return (
      <div
        className={
          'w-full h-[600px] flex-row-center text-center text-30 bg-neutral-100'
        }
      >
        {isError ? '에러가 발생했습니다.' : '로딩 중입니다.'}
      </div>
    );
  }

  return (
    <>
      <form
        className={`w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100 ${formTextStyle}`}
        onSubmit={onSubmit}
      >
        <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
          <div className={'py-30 flex flex-col gap-40'}>
            {questions.map(question => (
              <div
                key={question.index}
                className={'w-full flex flex-col gap-30'}
              >
                <div className={`w-full flex flex-col gap-20`}>
                  <div className={'font-semibold'}>
                    {question.index}. {question.title}
                    <span className={'text-14 text-red-700'}>
                      {showScore && ` (${question.score}점)`}
                    </span>
                  </div>
                  <div className={'pl-10'}>{question.description}</div>
                </div>
                <div className={`w-full`}>
                  <UserInput
                    question={question}
                    answer={
                      myAnswers.length > 0
                        ? myAnswers[question.index - 1]
                        : null
                    }
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={`w-full flex flex-col gap-20`}>
            <h3 className={'font-semibold'}>[토론 및 발표]</h3>
            <p className={'indent-[20px] whitespace-pre-wrap'}>
              {additionalDescription}
            </p>
          </div>

          <button
            className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] text-white ${buttonBgStyle}`}
            disabled={myAnswers.length > 0}
          >
            제출하기
          </button>
        </div>
      </form>

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={successModal ? 'success' : 'error'}
        message={successModal ? '제출되었습니다.' : '제출에 실패했습니다.'}
      />
    </>
  );
}

export default HomeworkForm;
