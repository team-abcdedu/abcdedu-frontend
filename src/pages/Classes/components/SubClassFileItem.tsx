import Book from '@/assets/icons/book.svg?react';
import Paperclip from '@/assets/icons/paperclip.svg?react';
import useGetSubClassFile from '@/hooks/class/useGetSubClassFile';
import { ApiError } from '@/libs/errors';
import useGetPdfUrl from '@/pages/Classes/hooks/useGetPdfUrl';
import useBoundStore from '@/stores';
import { FileData } from '@/types/class';

interface SubClassFileItemProps {
  type: '이론' | '자료';
  files: FileData[];
  toggleModal: () => void;
  setModalMessage: (message: string) => void;
}

function SubClassFileItem({
  type,
  files,
  toggleModal,
  setModalMessage,
}: SubClassFileItemProps) {
  const iconStyle =
    'w-80 h-80 sm:w-85 sm:h-85 md:w-90 md:h-90 text-primary-300';

  const { data, isError, error } = useGetSubClassFile({
    assignmentFileId: files[0].assignmentFileId,
  });

  const user = useBoundStore(state => state.user);

  const { pdfUrl } = useGetPdfUrl({
    s3Url: data?.filePresignedUrl,
    enabled: type === '이론',
  });

  const handleClick = () => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      setModalMessage('학생 이상만 이용 가능합니다.');
      toggleModal();
      return;
    }

    if (type === '이론' && user?.role !== '관리자') {
      setModalMessage('관리자만 이용 가능합니다.');
      toggleModal();
      return;
    }

    if (isError) {
      if (error instanceof ApiError) {
        setModalMessage(error.message);
        toggleModal();
        return;
      }
      setModalMessage(`${type} 파일을 불러오는 중 문제가 생겼습니다.`);
      toggleModal();
      return;
    }

    if (!data || !data?.filePresignedUrl) {
      setModalMessage(`${type} 파일이 없습니다.`);
      toggleModal();
      return;
    }

    const newWindow =
      type === '이론'
        ? window.open(pdfUrl, '_blank', 'noopener,noreferrer')
        : window.open(data?.filePresignedUrl, '_self', 'noopener,noreferrer');

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <button
      className={
        'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center'
      }
      onClick={handleClick}
    >
      <div className={'w-100 h-100 flex-row-center'}>
        {type === '이론' && <Book className={iconStyle} />}
        {type === '자료' && <Paperclip className={iconStyle} />}
      </div>
      <div
        className={'text-20 sm:text-22 md:text-25 font-semibold text-center'}
      >
        {type}
      </div>
    </button>
  );
}

export default SubClassFileItem;
