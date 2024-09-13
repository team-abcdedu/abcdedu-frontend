import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Modal from '@/components/Modal';
import useAnswerFileUpload, {
  ISubClassAnswerFileUploadForm,
} from '@/pages/Admin/Class/hooks/useAnswerFileUpload';

interface AnswerFileUploadModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function FileUploadModal({ isVisible, onClose }: AnswerFileUploadModalProps) {
  const inputWrapperStyle = 'w-full flex flex-col gap-5 p-5';
  const [file, setFile] = useState<File | null>(null);

  const { register, fieldRules, reset, errors, handleSubmit, fileMutation } =
    useAnswerFileUpload();

  const closeModal = () => {
    reset();
    onClose();
  };

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target?.files?.[0] as File;
    if (!inputFile) return;
    setFile(inputFile);
  };

  const onSubmit: SubmitHandler<ISubClassAnswerFileUploadForm> = (data, e) => {
    e?.preventDefault();
    const fileData = { ...data };
    fileData.file = file as File;
    fileMutation.mutate(fileData, {
      onSuccess: () => {
        alert('파일이 등록되었습니다.');
        reset();
        onClose();
      },
    });
  };

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={closeModal}>
      <Modal.Content>
        <form
          id={'file-upload'}
          className={'w-full flex flex-col gap-10 text-16'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={`${inputWrapperStyle}`}>
            <label htmlFor={'assignment-file-id'} className={`w-fit px-5`}>
              제출용 파일의 문제 파일 ID
            </label>
            <input
              {...register('assignmentFileId', fieldRules.assignmentFileId)}
              id={'assignment-file-id'}
              type='number'
              className={'p-5 border-2 rounded-md'}
            />
            {errors.assignmentFileId && (
              <span className={'text-13 text-red-700'}>
                {errors.assignmentFileId.message || ''}
              </span>
            )}
          </div>

          <div></div>
          <div className={`${inputWrapperStyle}`}>
            <div className={`w-full px-5 flex justify-end items-center`}>
              <label
                htmlFor={'file'}
                className={
                  'py-2 px-5 text-14 text-neutral-100 border-2 rounded-md bg-neutral-300'
                }
              >
                파일 찾기
              </label>
            </div>
            <div className={'w-full flex justify-between'}>
              <input
                type={'text'}
                value={file?.name ?? ''}
                readOnly
                className={'w-full p-5 text-neutral-500 border-2 rounded-md'}
              />
              <input
                {...register('file', fieldRules.file)}
                id={'file'}
                type={'file'}
                onChange={fileChangeHandler}
                className={'hidden'}
              />
              {errors.file && (
                <span className={'text-13 text-red-700'}>
                  {errors.file.message || ''}
                </span>
              )}
            </div>
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          form={'file-upload'}
          className={'w-1/2 h-40 text-white rounded-md bg-primary-300'}
        >
          등록
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default FileUploadModal;
