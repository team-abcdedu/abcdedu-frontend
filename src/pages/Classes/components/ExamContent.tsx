import { useCallback } from 'react';

import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import useGetPdfUrl from '@/pages/Classes/hooks/useGetPdfUrl';
import { getFileName } from '@/utils/getFileName';

interface ExamContentProps {
  assignmentFileId: number;
}

function ExamContent({ assignmentFileId }: ExamContentProps) {
  const buttonStyle =
    'p-5 md:p-10 text-18 md:text-20 border-2 border-primary-300 rounded-lg hover:bg-primary-300 hover:text-white transition ease-in-out delay-50';

  const { data: examFile } = useGetSubClassGeneralFile({
    assignmentFileId,
  });

  const { data: examStudentFile } = useGetSubClassStudentFile({
    assignmentAnswerFileId: examFile?.assignmentAnswerFileId,
    enabled: !!examFile?.assignmentAnswerFileId,
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
            새 탭에서 열기 ({getFileName(examFile?.filePresignedUrl)})
          </button>
        ) : (
          <a href={examFile?.filePresignedUrl} download className={buttonStyle}>
            파일 다운로드 ({getFileName(examFile?.filePresignedUrl)})
          </a>
        )}

        {examStudentFile && (
          <a
            href={examStudentFile.filePresignedUrl}
            download
            className={buttonStyle}
          >
            파일 다운로드 ({getFileName(examStudentFile.filePresignedUrl)})
          </a>
        )}
      </div>
    </div>
  );
}

export default ExamContent;
