import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Loader from '@/components/Loader';
import useSubClassFile from '@/hooks/class/useSubClassFile';
import useFileUpdateForm, {
  IFileUpdateForm,
} from '@/pages/Admin/Class/hooks/useFileUpdateForm';
import useFileUpdateMutation from '@/pages/Admin/Class/hooks/useFileUpdateMutation';
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

  const { register, errors, handleSubmit, fieldRules, reset } =
    useFileUpdateForm();
  const { mutation } = useFileUpdateMutation({ subLectureId, fileId });

  const handleOpenUpdateFileInput = () => {
    setUpdateFileInputOpen(prev => !prev);
    if (updateFileInputOpen) reset();
  };

  const onSubmit: SubmitHandler<IFileUpdateForm> = data => {
    const result = window.confirm('파일을 수정하시겠습니까?');
    if (result) {
      mutation.mutate(
        { fileId, file: data.file[0] },
        {
          onSuccess: () => {
            alert('파일이 수정됐습니다.');
            reset();
          },
          onError: error => {
            alert(error.message || '파일 수정에 실패했습니다.');
          },
        },
      );
    }
  };

  if (!fileData) return null;

  return (
    <div
      className={`grid grid-cols-5 gap-10 p-5 rounded-md text-15 text-center ${fileTypeStyle()}`}
    >
      {mutation.isPending && <Loader />}
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={'flex flex-col'}>
            <input
              {...register('file', fieldRules.file)}
              id={'file'}
              type={'file'}
              className={'w-full bg-white'}
              accept={'.zip,.rar,.7z,.tar,.gz,.pdf,.hwp,.doc,.docx'}
              disabled={mutation.isPending}
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
            disabled={mutation.isPending}
          >
            파일 수정
          </button>
        </form>
      )}
    </div>
  );
}

export default FileItem;
