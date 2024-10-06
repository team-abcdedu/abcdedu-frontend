import { useState } from 'react';

import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import FileItemDetails from '@/pages/Admin/Class/components/FileItemDetails';
import useGeneralFileUpdate from '@/pages/Admin/Class/hooks/useGeneralFileUpdate';

function GeneralFileItem({
  subLectureId,
  assignmentType,
  assignmentFileId,
}: {
  subLectureId: number;
  assignmentType: string;
  assignmentFileId: number;
}) {
  const fileTypeStyle = () => {
    if (assignmentType === '이론') {
      return 'bg-green-50';
    }
    if (assignmentType === '시험') {
      return 'bg-blue-50';
    }
    if (assignmentType === '시험지') {
      return 'bg-red-50';
    }
    return 'bg-yellow-50';
  };
  const [updateFileInputOpen, setUpdateFileInputOpen] = useState(false);

  const { data: generalFile } = useGetSubClassGeneralFile({
    assignmentFileId,
  });

  const { register, fieldRules, errors, onSubmit, reset } =
    useGeneralFileUpdate({
      subLectureId,
      assignmentFileId,
    });

  const handleOpenUpdateFileInput = () => {
    setUpdateFileInputOpen(prev => !prev);
    if (updateFileInputOpen) reset();
  };

  if (!generalFile) return null;

  return (
    <div
      className={`grid grid-cols-5 gap-10 p-5 rounded-md text-15 text-center ${fileTypeStyle()}`}
    >
      <FileItemDetails
        type={assignmentType}
        url={generalFile.filePresignedUrl}
      />

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

export default GeneralFileItem;
