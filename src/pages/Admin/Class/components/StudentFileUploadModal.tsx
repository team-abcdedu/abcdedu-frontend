import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import useStudentFileUpload from '@/pages/Admin/Class/hooks/useStudentFileUpload';

interface StudentFileUploadModalProps {
  assignmentFileId: number;
  isVisible: boolean;
  onClose: () => void;
}

function StudentFileUploadModal({
  assignmentFileId,
  isVisible,
  onClose,
}: StudentFileUploadModalProps) {
  const { register, fieldRules, errors, onSubmit } = useStudentFileUpload({
    assignmentFileId,
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

          <div className={'w-full flex flex-col-center'}>
            <input
              {...register('file', fieldRules.file)}
              id={'file'}
              type={'file'}
              className={'w-full pt-10'}
              accept={'.zip,.rar,.7z,.tar,.gz,.pdf,.hwp,.doc,.docx'}
            />
            {errors.file && (
              <span className={'text-12 text-red-700'}>
                {errors.file.message || ''}
              </span>
            )}
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

export default StudentFileUploadModal;
