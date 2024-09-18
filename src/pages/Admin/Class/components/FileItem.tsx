import { useEffect } from 'react';

import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
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
  const { data: answerData } = useGetSubClassStudentFile({
    assignmentAnswerFileId: 0,
  });

  const clickHandler = () => {
    toggleModal();
  };

  useEffect(() => {
    if (fileData && fileData.assignmentAnswerFileId) console.log(answerData);
  }, [fileData, answerData]);

  if (!fileData) return null;

  return (
    <div className={`flex-col-center border-1 rounded-xl ${fileTypeStyle()}`}>
      <button
        // href={fileData.filePresignedUrl}
        onClick={clickHandler}
        className={`gap-3 text-13 font-medium text-center text-primary-200 cursor-pointer`}
      >
        <div>
          {assignmentType} [ {assignmentFileId} ]
        </div>
      </button>
      <FileItemModal
        fileUrl={fileData.filePresignedUrl}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}

export default FileItem;
