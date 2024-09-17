import { useEffect } from 'react';

import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';

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

  const { data: fileData } = useGetSubClassGeneralFile({
    assignmentFileId,
  });

  const { data: answerData } = useGetSubClassStudentFile({
    assignmentAnswerFileId: 0,
  });

  useEffect(() => {
    if (fileData && fileData.assignmentAnswerFileId) console.log(answerData);
  }, [fileData, answerData]);

  if (!fileData) return null;

  return (
    <div className={`border-1 rounded-xl ${fileTypeStyle()}`}>
      <a
        href={fileData.filePresignedUrl}
        className={`gap-3 text-13 font-medium text-center text-primary-200 cursor-pointer`}
      >
        <div>
          {assignmentType} [ {assignmentFileId} ]
        </div>
      </a>
    </div>
  );
}

export default FileItem;
