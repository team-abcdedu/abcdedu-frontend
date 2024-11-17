import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import useGetPdfUrl from '@/pages/Classes/hooks/useGetPdfUrl';
import ClassApi from '@/services/class';
import useBoundStore from '@/stores';
import { FileInfo } from '@/types/class';
import { getFileExtension } from '@/utils/getFileExtension';
import { getFileName } from '@/utils/getFileName';

interface UseFetchSubClassFileInfoProps {
  fileInfo: FileInfo | undefined;
}

function useSubClassFileHandler({ fileInfo }: UseFetchSubClassFileInfoProps) {
  const user = useBoundStore(state => state.user);
  const { assignmentType: fileType, assignmentFileId: fileId } = fileInfo || {};

  const {
    data: fileData,
    isError,
    error,
  } = useQuery({
    queryKey: ['class', 'sub-class-general-file', fileId],
    queryFn: () => ClassApi.getSubClassFile(fileId || null),
    enabled: !!fileId && (user?.role === '관리자' || user?.role === '학생'),
  });

  const isPdfFile =
    !!fileData &&
    getFileExtension(getFileName(fileData.filePresignedUrl)) === 'pdf';
  const hasAccessToTheoryFile = user?.role === '관리자';

  const { pdfUrl } = useGetPdfUrl({
    s3Url: fileData?.filePresignedUrl,
    enabled:
      fileData &&
      isPdfFile &&
      ((fileType === '이론' && hasAccessToTheoryFile) || fileType === '시험'),
  });

  const handleClick = (
    setModalMessage: (message: string) => void,
    toggleModal: () => void,
  ) => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      setModalMessage('학생 이상만 이용 가능합니다.');
      toggleModal();
      return;
    }

    if (fileType === '이론' && user?.role !== '관리자') {
      setModalMessage('관리자만 이용 가능합니다.');
      toggleModal();
      return;
    }

    if (isError) {
      const errorMsg =
        error instanceof ApiError
          ? error.message
          : `${fileType} 파일을 불러오는 중 문제가 생겼습니다.`;
      setModalMessage(errorMsg);
      toggleModal();
      return;
    }

    if (!fileData || !fileData?.filePresignedUrl) {
      setModalMessage(`${fileType} 파일이 없습니다.`);
      toggleModal();
      return;
    }

    const newWindow =
      isPdfFile &&
      ((fileType === '이론' && hasAccessToTheoryFile) || fileType === '시험')
        ? window.open(pdfUrl, '_blank', 'noopener,noreferrer')
        : window.open(
            fileData?.filePresignedUrl,
            '_self',
            'noopener,noreferrer',
          );

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return { hasAccessToTheoryFile, handleClick };
}

export default useSubClassFileHandler;
