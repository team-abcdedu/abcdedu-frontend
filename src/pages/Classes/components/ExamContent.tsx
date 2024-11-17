import useSubClassFileHandler from '@/hooks/class/useSubClassFileHandler';
import { FileInfo } from '@/types/class';

interface ExamContentProps {
  examFileInfo: FileInfo | undefined;
  examPaperFileInfo: FileInfo | undefined;
  setModalMessage: (message: string) => void;
  toggleModal: () => void;
}

function ExamContent({
  examFileInfo,
  examPaperFileInfo,
  setModalMessage,
  toggleModal,
}: ExamContentProps) {
  const buttonStyle =
    'p-5 md:p-10 text-18 md:text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50';

  const { handleClick: handleExamBtnClick } = useSubClassFileHandler({
    fileInfo: examFileInfo,
  });
  const { handleClick: handleExamPaperBtnClick } = useSubClassFileHandler({
    fileInfo: examPaperFileInfo,
  });

  return (
    <div className={'w-full pb-50 flex-col-center gap-30'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        {examFileInfo && (
          <button
            type={'button'}
            className={buttonStyle}
            onClick={() => handleExamBtnClick(setModalMessage, toggleModal)}
          >
            문제 확인하기
          </button>
        )}

        {examPaperFileInfo && (
          <button
            type={'button'}
            className={buttonStyle}
            onClick={() =>
              handleExamPaperBtnClick(setModalMessage, toggleModal)
            }
          >
            답안 제출 파일 다운로드
          </button>
        )}
      </div>
    </div>
  );
}

export default ExamContent;
