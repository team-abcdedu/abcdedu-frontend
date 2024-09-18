import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useModal from '@/hooks/useModal';
import FileItemModal from '@/pages/Admin/Class/components/FileItemModal';

function FileItem({
  assignmentType,
  assignmentFileId,
}: {
  assignmentType: string;
  assignmentFileId: number;
}) {
  const fileTypeStyle = () => {
    if (assignmentType === '이론') {
      return 'bg-green-100';
    }
    if (assignmentType === '시험') {
      return 'bg-blue-100';
    }
    return 'bg-yellow-100';
  };

  const { isVisible, toggleModal } = useModal();

  const { data: fileData } = useGetSubClassGeneralFile({
    assignmentFileId,
  });

  if (!fileData) return null;

  return (
    <div className={`flex-col-center border-1 rounded-xl ${fileTypeStyle()}`}>
      <button
        onClick={toggleModal}
        className={`gap-3 text-13 font-medium text-center text-primary-200 cursor-pointer`}
      >
        <div>
          {assignmentType} [ {assignmentFileId} ]
        </div>
      </button>
      <FileItemModal
        assignmentType={assignmentType}
        assignmentFileId={assignmentFileId}
        assignmentFileUrl={fileData.filePresignedUrl}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}

export default FileItem;
