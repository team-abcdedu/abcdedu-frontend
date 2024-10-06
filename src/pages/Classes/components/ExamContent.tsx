import { useCallback } from 'react';

import useGetSubClassFile from '@/hooks/class/useGetSubClassFile';
import useGetPdfUrl from '@/pages/Classes/hooks/useGetPdfUrl';
import { getFileName } from '@/utils/getFileName';

interface ExamContentProps {
  examFileId: number | undefined;
  examPaperFileId: number | undefined;
}

function ExamContent({ examFileId, examPaperFileId }: ExamContentProps) {
  const buttonStyle =
    'p-5 md:p-10 text-18 md:text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50';

  const { data: examFile } = useGetSubClassFile({
    assignmentFileId: examFileId || null,
  });

  const { data: examPaperFile } = useGetSubClassFile({
    assignmentFileId: examPaperFileId || null,
  });

  const getFileExtension = useCallback((fileName: string | undefined) => {
    return fileName?.split('.').pop();
  }, []);

  const { pdfUrl } = useGetPdfUrl({
    s3Url: examFile?.filePresignedUrl,
    enabled:
      examFile &&
      getFileExtension(getFileName(examFile?.filePresignedUrl)) === 'pdf',
  });

  const handleFileOpen = () => {
    const newWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  if (!examFile) {
    return null;
  }

  return (
    <div className={'w-full pb-50 flex-col-center gap-30'}>
      <div className={'w-full flex-col-center sm:flex-row-center gap-30'}>
        {getFileExtension(getFileName(examFile?.filePresignedUrl)) === 'pdf' ? (
          <button
            type={'button'}
            className={buttonStyle}
            onClick={handleFileOpen}
          >
            문제 확인하기
          </button>
        ) : (
          <a href={examFile?.filePresignedUrl} download className={buttonStyle}>
            답안 제출 파일 다운로드
          </a>
        )}

        {examPaperFile && (
          <a
            href={examPaperFile.filePresignedUrl}
            download
            className={buttonStyle}
          >
            답안 제출 파일 다운로드
          </a>
        )}
      </div>
    </div>
  );
}

export default ExamContent;
