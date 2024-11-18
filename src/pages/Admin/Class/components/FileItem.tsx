import { useState } from 'react';

import useSubClassFile from '@/hooks/class/useSubClassFile';
import useFileUpdate from '@/pages/Admin/Class/hooks/useFileUpdate';
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

  const [updateFileInputOpen, setUpdateFileInputOpen] = useState(false);

  const { fileData } = useSubClassFile({
    fileId,
  });

  const { register, fieldRules, errors, onSubmit, reset } = useFileUpdate({
    subLectureId,
    assignmentFileId: fileId,
  });

  const handleOpenUpdateFileInput = () => {
    setUpdateFileInputOpen(prev => !prev);
    if (updateFileInputOpen) reset();
  };

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
        onClick={handleOpenUpdateFileInput}
      >
        {updateFileInputOpen ? '닫기' : '수정'}
      </button>

      {updateFileInputOpen && (
        <form
          className={'row-start-2 col-span-4 col-start-2 flex gap-10 text-13'}
          onSubmit={onSubmit}
        >
          <div className={'flex flex-col'}>
            <input
              {...register('file', fieldRules.file)}
              id={'file'}
              type={'file'}
              className={'w-full bg-white'}
              accept={'.zip,.rar,.7z,.tar,.gz,.pdf,.hwp,.doc,.docx'}
            />
            {errors.file && (
              <span className={'text-10 text-red-700'}>
                {errors.file.message}
              </span>
            )}
          </div>
          <button
            className={
              'h-fit px-10 py-2 text-red-500 border-1 rounded-md border-red-300'
            }
          >
            파일 수정
          </button>
        </form>
      )}
    </div>
  );
}

export default FileItem;
