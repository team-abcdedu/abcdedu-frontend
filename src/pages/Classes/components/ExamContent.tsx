import useSubClassFileHandler from '@/hooks/class/useSubClassFileHandler';
import { FileActionResult, FileInfo } from '@/types/class';

interface ExamContentProps {
  examFileInfo: FileInfo | undefined;
  examPaperFileInfo: FileInfo | undefined;
  handleButtonClick: (action: () => FileActionResult) => Promise<void>;
}

function ExamContent({
  examFileInfo,
  examPaperFileInfo,
  handleButtonClick,
}: ExamContentProps) {
  const buttonStyle =
    'p-5 md:p-10 text-18 md:text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50';

  const { handleClick: handleExamClick } = useSubClassFileHandler({
    fileInfo: examFileInfo,
  });
  const { handleClick: handleExamPaperClick } = useSubClassFileHandler({
    fileInfo: examPaperFileInfo,
  });

  const handleExamBtnClick = () => handleButtonClick(handleExamClick);
  const handleExamPaperBtnClick = () => handleButtonClick(handleExamPaperClick);

  return (
    <div className={'w-full pb-50 flex-col-center gap-30'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        {examFileInfo && (
          <button
            type={'button'}
            className={buttonStyle}
            onClick={handleExamBtnClick}
          >
            문제 확인하기
          </button>
        )}

        {examPaperFileInfo && (
          <button
            type={'button'}
            className={buttonStyle}
            onClick={handleExamPaperBtnClick}
          >
            답안 제출 파일 다운로드
          </button>
        )}
      </div>
    </div>
  );
}

export default ExamContent;
