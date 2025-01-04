import axios from 'axios';

import AdminHomeworkApi from '@/services/admin/homework';

import { IRepliesDownloadForm } from './useRepliesDownloadForm';

interface UseRepliesDownloadProps {
  homeworkId: number;
}

function useRepliesDownload({ homeworkId }: UseRepliesDownloadProps) {
  const handleDownload = async (data: IRepliesDownloadForm) => {
    try {
      const response = await AdminHomeworkApi.getHomeworkRepliesExcel({
        homeworkId,
        ...data,
      });

      const fileName = `과제응답(${data.fromDate.slice(2).replaceAll('-', '')}-${data.toDate
        .slice(2)
        .replaceAll('-', '')}).xlsx`;

      const link = document.createElement('a');
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(link.href);
      link.remove();
      return { status: 'success', message: '' };
    } catch (err) {
      return {
        status: 'error',
        message: axios.isAxiosError(err)
          ? '파일을 불러오는 중에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.'
          : '파일 다운로드 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      };
    }
  };

  return { handleDownload };
}

export default useRepliesDownload;
