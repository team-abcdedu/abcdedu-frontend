import { Dispatch, SetStateAction } from 'react';

import AdminHomeworkApi from '@/services/admin/homework';
import { HomeworkSummary } from '@/types/homework';
import { formatDate } from '@/utils/formatDate';

interface FormatValueProps {
  row: HomeworkSummary;
  column: keyof HomeworkSummary | 'repliesDownload' | 'representative';
  setDownloadHomeworkId: Dispatch<SetStateAction<number | null>>;
  downloadToggle: () => void;
}

function HomeworkFormatValue({
  row,
  column,
  setDownloadHomeworkId,
  downloadToggle,
}: FormatValueProps) {
  if (column === 'repliesDownload') {
    const handleClick = () => {
      setDownloadHomeworkId(row.id);
      downloadToggle();
    };

    return (
      <button
        type={'button'}
        className={'py-5 px-10 border-1 rounded border-black'}
        onClick={handleClick}
      >
        다운로드
      </button>
    );
  }
  if (column === 'representative') {
    const handleClick = async () => {
      await AdminHomeworkApi.setRepresentativeHomework(row.id);
    };
    // 대표 과제인 경우 check 표시
    return (
      <button
        type={'button'}
        className={'py-5 px-10 border-1 rounded border-black'}
        onClick={handleClick}
      >
        선택
      </button>
    );
  }

  if (column === 'updatedDate') {
    return formatDate(row[column], true);
  }

  return row[column];
}

export default HomeworkFormatValue;
