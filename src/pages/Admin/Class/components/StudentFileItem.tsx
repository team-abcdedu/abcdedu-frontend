import { useState } from 'react';

import FileItemDetails from '@/pages/Admin/Class/components/FileItemDetails';
import useStudentFileUpdate from '@/pages/Admin/Class/hooks/useStudentFileUpdate';

interface StudentFileItemProps {
  type: string;
  url: string;
  assignmentAnswerFileId: number;
}

function StudentFileItem({
  type,
  url,
  assignmentAnswerFileId,
}: StudentFileItemProps) {
  const [updateFileInput, setUpdateFileInput] = useState(false);

  const { register, errors, fieldRules, onSubmit, reset } =
    useStudentFileUpdate({
      assignmentAnswerFileId,
    });

  const handleOpenUpdateFileInput = () => {
    setUpdateFileInput(prev => !prev);
    if (updateFileInput) {
      reset();
    }
  };

  return (
    <div
      className={'col-span-5 w-full grid grid-cols-5 place-items-center gap-10'}
    >
      <FileItemDetails type={type} url={url} />

      <button
        type={'button'}
        className={`text-13 text-center font-normal text-red-500`}
        onClick={handleOpenUpdateFileInput}
      >
        수정
      </button>
      {updateFileInput && (
        <form className={'col-span-5 flex gap-10 text-13'} onSubmit={onSubmit}>
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

export default StudentFileItem;
