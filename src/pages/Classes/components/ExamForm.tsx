import MessageModal from '@/components/MessageModal';
import useClassForm from '@/hooks/useClassForm';
import useModal from '@/hooks/useModal';

import { ExamInfo } from '../types';

function ExamForm({ examInfo }: { examInfo: ExamInfo }) {
  const { title, questions } = examInfo;
  const { isVisible, toggleModal } = useModal();
  const { register, onSubmit, errors } = useClassForm({
    type: 'exam',
    toggleModal,
  });

  return (
    <>
      <form
        className={
          'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
        }
        onSubmit={onSubmit}
      >
        <h2
          className={
            'min-w-[350px] md:min-w-[700px] text-30 md:text-40 font-bold text-center md:text-start'
          }
        >
          {title}
        </h2>
        {questions.map((question, index) => (
          <div
            key={question}
            className={
              'min-w-[350px] md:min-w-[700px] w-4/5 h-max flex flex-col gap-20'
            }
          >
            <div
              className={
                'pl-20 indent-[-20px] text-16 md:text-20 font-semibold md:whitespace-pre-wrap'
              }
            >
              {index + 1}. {question}
            </div>
            <textarea
              {...register(`answers.${index}`, {
                required: '답안을 입력해주세요.',
              })}
              className={'w-full min-h-[200px] p-10'}
              placeholder={'답안 입력하기'}
            />
            {errors.answers?.[`${index}`] && (
              <span className={'text-red-500 text-16'}>
                {errors.answers?.[`${index}`]?.message}
              </span>
            )}
          </div>
        ))}
        <button
          className={
            'min-w-150 min-h-50 px-16 py-8 text-20 text-white rounded-[10px] bg-primary-300 hover:bg-opacity-90 transition: background-color 0.2s;'
          }
        >
          제출하기
        </button>
      </form>
      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'success'}
        message={'제출되었습니다.'}
      />
    </>
  );
}

export default ExamForm;
