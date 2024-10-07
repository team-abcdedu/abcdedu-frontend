import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import useFileUpload from '@/pages/Admin/Class/hooks/useFileUpload';

interface FileUploadModalProps {
  subClassId: number;
  isVisible: boolean;
  onClose: () => void;
}

function FileUploadModal({
  subClassId,
  isVisible,
  onClose,
}: FileUploadModalProps) {
  const { register, fieldRules, errors, onSubmit } = useFileUpload({
    subLectureId: subClassId,
  });

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <form
          id={'file-upload'}
          className={'w-full pt-10 flex flex-col gap-10 text-16'}
          onSubmit={onSubmit}
        >
          <button
            type='button'
            className='absolute top-12 right-12'
            onClick={onClose}
          >
            <X size={20} />
          </button>

          <div className={'w-full flex-col-center gap-20'}>
            <div className={`w-2/3 flex justify-between items-center px-10`}>
              <span className={'text-neutral-500'}>파일 유형</span>
              <select
                {...register('type', fieldRules.type)}
                className={'p-5 font-medium'}
              >
                <option value={'THEORY'}>이론</option>
                <option value={'DATA'}>자료</option>
                <option value={'EXAM'}>시험</option>
                <option value={'ANSWER'}>시험지</option>
              </select>
              {errors.type && (
                <span className={'text-13 text-red-700'}>
                  {errors.type.message || ''}
                </span>
              )}
            </div>
            <div className={'w-2/3'}>
              <input
                {...register('file', fieldRules.file)}
                id={'file'}
                type={'file'}
                className={'w-full border-1'}
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

export default FileUploadModal;
