import { useState } from 'react';

import FileItemDetails from '@/pages/Admin/Class/components/FileItemDetails';
import useStudentFileUpdate from '@/pages/Admin/Class/hooks/useStudentFileUpdate';

interface StudentFileItemProps {
  type: string;
  url: string;
  assignmentFileId: number;
}

function StudentFileItem({
  type,
  url,
  assignmentFileId,
}: StudentFileItemProps) {
  const [updateFileInput, setUpdateFileInput] = useState(false);

  const { register, errors, fieldRules, onSubmit } = useStudentFileUpdate({
    assignmentAnswerFileId: assignmentFileId,
  });

  return (
    <div className={'row-start-2 col-span-5'}>
      <FileItemDetails type={type} id={0} url={url} />

      <button
        type={'button'}
        className={`text-13 text-center font-normal text-red-500`}
        onClick={() => setUpdateFileInput(prev => !prev)}
      >
        수정
      </button>
      {updateFileInput && (
        <form
          className={'row-start-2 col-span-5 flex gap-10 text-13'}
          onSubmit={onSubmit}
        >
          <div className={'w-2/3 flex flex-col'}>
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
              'h-fit px-10 py-2 text-red-500 border-1 rounded-md border-red-500'
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
