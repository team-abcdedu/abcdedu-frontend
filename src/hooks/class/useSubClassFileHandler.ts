import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import ClassApi from '@/services/class';
import useBoundStore from '@/stores';
import { FileActionResult, FileInfo } from '@/types/class';
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
    isLoading,
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

  const handleClick: () => FileActionResult = () => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      return { status: 'error', message: '학생 이상만 이용 가능합니다.' };
    }

    if (fileType === '이론' && user?.role !== '관리자') {
      return { status: 'error', message: '관리자만 이용 가능합니다.' };
    }

    if (isLoading) {
      return {
        status: 'loading',
        message: `${fileType} 파일을 로딩 중입니다. 잠시 후 다시 시도해주세요`,
      };
    }

    if (isError) {
      const errorMsg =
        error instanceof ApiError
          ? error.message
          : `${fileType} 파일을 불러오는 중 문제가 생겼습니다.`;
      return { status: 'error', message: errorMsg };
    }

    if (!fileData || !fileData?.filePresignedUrl) {
      return { status: 'error', message: `${fileType} 파일이 없습니다.` };
    }

    const isNewWindowOpen =
      isPdfFile &&
      ((fileType === '이론' && hasAccessToTheoryFile) || fileType === '시험');

    return {
      status: 'success',
      message: '파일이 열렸습니다.',
      isNewWindowOpen,
      fileUrl: fileData.filePresignedUrl,
    };
  };

  return { hasAccessToTheoryFile, handleClick };
}

export default useSubClassFileHandler;
