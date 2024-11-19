import useSubClassFile from '@/hooks/class/useSubClassFile';
import useModal from '@/hooks/useModal';
import FileUpdateModal from '@/pages/Admin/Class/components/FileUpdateModal';
import { FileInfo } from '@/types/class';

function FileItem({
  subLectureId,
  fileInfo,
}: {
  subLectureId: number;
  fileInfo: FileInfo;
}) {
  const { assignmentType: fileType, assignmentFileId: fileId } = fileInfo;

  const fileTypeStyle = () => {
    if (fileType === '이론') {
      return 'bg-green-50';
    }
    if (fileType === '시험') {
      return 'bg-blue-50';
    }
    if (fileType === '시험지') {
      return 'bg-red-50';
    }
    return 'bg-yellow-50';
  };

  const { fileData } = useSubClassFile({
    fileId,
  });

  const { isVisible, toggleModal } = useModal();

  if (!fileData) return null;

  return (
    <div
      className={`grid grid-cols-5 gap-10 p-5 rounded-md text-15 text-center ${fileTypeStyle()}`}
    >
      <div className={'flex items-center col-start-2'}>
        <span>{fileType}</span>
      </div>
      <a
        href={fileData.filePresignedUrl}
        download
        className={'text-14 text-primary-300'}
      >
        다운로드
      </a>

      <button
        type={'button'}
        className={`text-14 text-center font-normal text-red-500`}
        onClick={toggleModal}
      >
        파일 수정
      </button>

      <FileUpdateModal
        subLectureId={subLectureId}
        fileType={fileType}
        fileId={fileId}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}

export default FileItem;
