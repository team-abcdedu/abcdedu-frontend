import MessageModal from '@/components/MessageModal';
import useClassForm from '@/hooks/useClassForm';
import useModal from '@/hooks/useModal';

import { AssignmentInfo } from '../types';

function AssignmentForm({
  assignmentInfo,
  readOnly,
}: {
  assignmentInfo: AssignmentInfo;
  readOnly: boolean;
}) {
  const { questions } = assignmentInfo;
  const { isVisible, toggleModal } = useModal();
  const { register, onSubmit, errors } = useClassForm({
    type: 'assignment',
    toggleModal,
  });

  const formTextStyle = 'text-16 md:text-20';

  // 파일 제출
  // const [files, setFiles] = useState<File[]>([]);
  // const inputFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const fileList = e.target.files;
  //   if (!fileList) return;
  //   setFiles(prev => [...prev, ...Array.from(fileList)]);
  // };
  //
  // const deleteFileHandler = (index: number) => {
  //   setFiles(prev => prev.filter((_, i) => i !== index));
  // };

  return (
    <>
      <form
        className={
          'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
        }
        onSubmit={onSubmit}
      >
        <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
          <div className={'py-30 flex flex-col gap-40'}>
            {questions.map((q, qIndex) => (
              <label
                key={q.question}
                className={`w-full flex flex-col gap-20 ${formTextStyle}`}
              >
                <h3 className={'font-semibold'}>
                  {qIndex + 1}. {q.question}
                </h3>
                {q.explanation.map(ex => (
                  <p key={ex} className={'indent-[20px] whitespace-pre-wrap'}>
                    {ex}
                  </p>
                ))}
                <textarea
                  {...register(`answers.${qIndex}`, {
                    required: '답안을 입력해주세요.',
                  })}
                  className={`w-full min-h-[150px] p-6`}
                  placeholder={'답안 입력하기'}
                  readOnly={readOnly}
                />
                {errors.answers?.[`${qIndex}`] && (
                  <span className={'text-red-500 text-16'}>
                    {errors.answers?.[`${qIndex}`]?.message}
                  </span>
                )}
              </label>
            ))}
          </div>

          {/* 파일 제출 */}
          {/* <div className={`w-full flex flex-col gap-20 ${formTextStyle}`}> */}
          {/*  <h3 className={'font-semibold'}>[첨부 파일]</h3> */}
          {/*  <div className={'flex gap-20'}> */}
          {/*    <input */}
          {/*      className={'w-1/2 border-2 text-neutral-300'} */}
          {/*      value={files.map(f => f.name).join(' / ')} */}
          {/*      placeholder={'첨부 파일'} */}
          {/*      readOnly */}
          {/*    /> */}
          {/*    <label */}
          {/*      htmlFor={'input-file'} */}
          {/*      className={ */}
          {/*        'px-10 font-semibold text-neutral-100 border-2 bg-neutral-400' */}
          {/*      } */}
          {/*    > */}
          {/*      파일 찾기 */}
          {/*    </label> */}
          {/*    <input */}
          {/*      className={'absolute w-0 h-0 p-0 overflow-hidden'} */}
          {/*      id={'input-file'} */}
          {/*      type={'file'} */}
          {/*      onChange={inputFileHandler} */}
          {/*      multiple */}
          {/*    /> */}
          {/*  </div> */}
          {/*  <div className={'flex flex-col gap-10'}> */}
          {/*    {files && */}
          {/*      Array.from(files).map((file, index) => ( */}
          {/*        <div key={index} className={'flex gap-10'}> */}
          {/*          <span>{file.name}</span> */}
          {/*          <button */}
          {/*            type={'button'} */}
          {/*            className={'text-red-700 font-semibold'} */}
          {/*            onClick={() => deleteFileHandler(index)} */}
          {/*          > */}
          {/*            x */}
          {/*          </button> */}
          {/*        </div> */}
          {/*      ))} */}
          {/*  </div> */}
          {/* </div> */}

          <div className={`w-full flex flex-col gap-20 ${formTextStyle}`}>
            <h3 className={'font-semibold'}>[토론 및 발표]</h3>
            <p className={'indent-[20px] whitespace-pre-wrap'}>
              위에서 적은 내용을 친구들과 공유하고 토론해보자. 그리고 생각을
              가다듬고 정리해서 자신 있게 발표해보자.
            </p>
          </div>
          <button
            className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] bg-primary-300 ${formTextStyle} text-white`}
          >
            제출하기
          </button>
        </div>
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

export default AssignmentForm;
