import { ChangeEvent, useEffect, useState } from 'react';

interface FileActionButtonsProps {
  fileType: string;
  fileUrl: string | undefined;
  updateHandler: (file: File | null) => void;
}

function FileActionButtons({
  fileType,
  fileUrl,
  updateHandler,
}: FileActionButtonsProps) {
  const [openUpdateInput, setOpenUpdateInput] = useState(false);
  const [updateFile, setUpdateFile] = useState<File | null>(null);

  const handleUpdateFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setUpdateFile(e.target.files[0]);
  };

  useEffect(() => {
    setOpenUpdateInput(false);
    setUpdateFile(null);
  }, []);

  return (
    <>
      <div className={'w-2/3 grid grid-cols-2 text-center'}>
        <span className={'text-neutral-500'}>{fileType} 파일</span>
        <div className={'flex gap-10'}>
          <a
            href={fileUrl}
            target={'_blank'}
            download
            className={'text-18 text-primary-300'}
            rel='noreferrer'
          >
            다운로드
          </a>
          <button
            type={'button'}
            className={'text-16 text-green-600'}
            onClick={() => setOpenUpdateInput(prev => !prev)}
          >
            수정
          </button>
        </div>
      </div>
      {openUpdateInput && (
        <div className={'w-full px-10 flex flex-col-center gap-10'}>
          <div className={'flex gap-10 justify-center'}>
            <input
              value={updateFile?.name}
              className={'border-2 px-5 cursor-default'}
              readOnly
            />
            <label
              htmlFor={'update-general-file'}
              className={'text-neutral-500 border-2 px-5 cursor-pointer'}
            >
              파일 선택
            </label>
            <input
              id={'update-general-file'}
              type={'file'}
              onChange={handleUpdateFileChange}
              className={'hidden'}
            />
          </div>
          <button
            type={'button'}
            className={
              'w-fit p-5 border-1 rounded-md text-green-800 border-green-800'
            }
            onClick={() => updateHandler(updateFile)}
          >
            파일 수정하기
          </button>
        </div>
      )}
    </>
  );
}

export default FileActionButtons;
