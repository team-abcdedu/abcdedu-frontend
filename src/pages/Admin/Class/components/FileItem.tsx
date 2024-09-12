import { useEffect } from 'react';

import useGetSubClassAnswerFile from '@/hooks/class/useGetSubClassAnswerFile';
import useGetSubClassFile from '@/hooks/class/useGetSubClassFile';

function FileItem({
  assignmentType,
  assignmentFileId,
}: {
  assignmentType: string;
  assignmentFileId: number;
}) {
  const { data: fileData } = useGetSubClassFile({
    assignmentFileId,
  });

  const { data: answerData } = useGetSubClassAnswerFile({
    assignmentAnswerFileId: assignmentFileId,
    enabled: !!fileData?.assignmentAnswerFileId,
  });

  useEffect(() => {
    if (fileData && fileData.assignmentAnswerFileId) console.log(answerData);
  }, [fileData]);

  if (!fileData) return null;

  return (
    <>
      <a
        href={fileData.filePresignedUrl}
        className={'text-15 font-medium text-primary-200 cursor-pointer'}
      >
        {assignmentType}-{assignmentFileId}
      </a>
    </>
  );
}

export default FileItem;
