import { X } from '@phosphor-icons/react';
import { useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import Modal from '@/components/Modal';
import useGeneralFileUpload, {
  IFileUploadForm,
} from '@/pages/Admin/Class/hooks/useGeneralFileUpload';

interface FileUploadModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function GeneralFileUploadModal({ isVisible, onClose }: FileUploadModalProps) {
  const inputWrapperStyle = 'w-full flex flex-col gap-5 p-5';
  const [file, setFile] = useState<File | null>(null);

  const { register, fieldRules, reset, errors, handleSubmit, fileMutation } =
    useGeneralFileUpload();

  const closeModal = () => {
    setFile(null);
    reset();
    onClose();
  };

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target?.files?.[0] as File;
    if (!inputFile) return;
    setFile(inputFile);
  };

  const queryClient = useQueryClient();
  const onSubmit: SubmitHandler<IFileUploadForm> = (data, e) => {
    e?.preventDefault();
    const fileData = { ...data };
    fileData.file = file as File;
    fileMutation.mutate(fileData, {
      onSuccess: () => {
        alert('파일이 등록되었습니다.');
        queryClient.invalidateQueries({
          queryKey: ['sub-class-file-list', fileData.subLectureId as number],
        });
        closeModal();
      },
    });
  };

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={closeModal}>
      <Modal.Content>
        <form
          id={'file-upload'}
          className={'w-full pt-10 flex flex-col gap-10 text-16'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            type='button'
            className='absolute top-12 right-12'
            onClick={closeModal}
          >
            <X size={20} />
          </button>
          <div className={`${inputWrapperStyle}`}>
            <label htmlFor={'title'} className={`w-fit px-5`}>
              서브 클래스 ID
            </label>
            <input
              {...register('subLectureId', fieldRules.subLectureId)}
              id={'subclass-id'}
              type='number'
              className={'p-5 border-2 rounded-md'}
            />
            {errors.subLectureId && (
              <span className={'text-13 text-red-700'}>
                {errors.subLectureId.message || ''}
              </span>
            )}
          </div>

          <div className={`${inputWrapperStyle}`}>
            <div
              className={`w-full px-5 flex justify-between items-center gap-20`}
            >
              <select {...register('type', fieldRules.type)}>
                <option value={'이론'}>이론</option>
                <option value={'자료'}>자료</option>
                <option value={'시험'}>시험</option>
              </select>
              {errors.type && (
                <span className={'text-13 text-red-700'}>
                  {errors.type.message || ''}
                </span>
              )}
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
                accept={'.zip,.rar,.7z,.tar,.gz,.pdf,.hwp,.doc,.docx'}
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

export default GeneralFileUploadModal;
