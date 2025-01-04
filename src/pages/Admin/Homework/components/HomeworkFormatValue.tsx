import { Dispatch, SetStateAction } from 'react';

import { queryClient } from '@/libs/react-query';
import AdminHomeworkApi from '@/services/admin/homework';
import { HomeworkSummary } from '@/types/homework';
import { formatDate } from '@/utils/formatDate';

interface FormatValueProps {
  row: HomeworkSummary;
  column: keyof HomeworkSummary | 'repliesDownload';
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

  if (column === 'isRepresentative') {
    const handleClick = async () => {
      const result = window.confirm('대표과제로 선택합니다.');
      if (result) {
        try {
          await AdminHomeworkApi.setRepresentativeHomework(row.id);
          alert('대표과제로 선택되었습니다.');
          await queryClient.invalidateQueries({
            queryKey: ['homework', 'list'],
          });
        } catch (err) {
          alert('에러가 발생하였습니다.\n잠시 후 다시 시도해주세요.');
        }
      }
    };

    if (row.isRepresentative) {
      return <span>대표</span>;
    }
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
