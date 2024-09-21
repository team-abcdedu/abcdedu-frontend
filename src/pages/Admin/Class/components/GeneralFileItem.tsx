import { useState } from 'react';

import useGetSubClassGeneralFile from '@/hooks/class/useGetSubClassGeneralFile';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import useModal from '@/hooks/useModal';
import FileItemDetails from '@/pages/Admin/Class/components/FileItemDetails';
import StudentFileItem from '@/pages/Admin/Class/components/StudentFileItem';
import StudentFileUploadModal from '@/pages/Admin/Class/components/StudentFileUploadModal';
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
    if (assignmentType === 'THEORY') {
      return 'bg-green-50';
    }
    if (assignmentType === 'EXAM') {
      return 'bg-blue-50';
    }
    return 'bg-yellow-50';
  };
  const { isVisible, toggleModal } = useModal();
  const [updateFileInput, setUpdateFileInput] = useState(false);

  const { data: generalFile } = useGetSubClassGeneralFile({
    assignmentFileId,
  });

  const { data: studentFile } = useGetSubClassStudentFile({
    assignmentAnswerFileId: generalFile?.assignmentAnswerFileId ?? 0,
    enabled: assignmentType === 'EXAM' && !!generalFile?.assignmentAnswerFileId,
  });

  const { register, fieldRules, errors, onSubmit, reset } =
    useGeneralFileUpdate({
      subLectureId,
      assignmentFileId,
    });

  const handleOpenUpdateFileInput = () => {
    setUpdateFileInput(prev => !prev);
    if (updateFileInput) reset();
  };

  if (!generalFile) return null;

  return (
    <div
      className={`grid grid-cols-5 gap-10 place-items-center p-5 rounded-md text-15 text-center ${fileTypeStyle()}`}
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
        수정
      </button>

      {assignmentType === 'EXAM' && (
        <>
          <button
            type={'button'}
            className={`col-span-2 text-13 text-center font-normal text-sky-800`}
            onClick={toggleModal}
          >
            제출용 파일 업로드
          </button>
          <StudentFileUploadModal
            isVisible={isVisible}
            onClose={toggleModal}
            assignmentFileId={assignmentFileId}
          />
        </>
      )}

      {updateFileInput && (
        <form
          className={'row-start-2 col-span-5 flex gap-10 text-13'}
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

      {studentFile && (
        <StudentFileItem
          type={'제출용'}
          assignmentAnswerFileId={generalFile.assignmentAnswerFileId}
          url={studentFile.filePresignedUrl}
        />
      )}
    </div>
  );
}

export default GeneralFileItem;
