import { X } from '@phosphor-icons/react';
import { SubmitHandler } from 'react-hook-form';

import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import useFileUpdateForm, {
  IFileUpdateForm,
} from '@/pages/Admin/Class/hooks/useFileUpdateForm';
import useFileUpdateMutation from '@/pages/Admin/Class/hooks/useFileUpdateMutation';

interface FileUpdateModalProps {
  subClassId: number;
  fileType: string;
  fileId: number;
  isVisible: boolean;
  onClose: () => void;
}

function FileUpdateModal({
  subClassId,
  fileType,
  fileId,
  isVisible,
  onClose,
}: FileUpdateModalProps) {
  const { register, errors, handleSubmit, fieldRules, reset } =
    useFileUpdateForm();
  const { mutation } = useFileUpdateMutation({ subClassId, fileId });

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

  return (
    <Modal size={'sm'} isVisible={isVisible}>
      {mutation.isPending && <Loader />}
      <Modal.Header>
        <button
          type='button'
          className='absolute top-12 right-12'
          onClick={onClose}
          disabled={mutation.isPending}
        >
          <X size={20} />
        </button>
      </Modal.Header>
      <Modal.Content>
        <form
          id={'file-update'}
          className={`w-full pt-10 flex flex-col gap-10 text-16`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={'w-full flex-col-center gap-20'}>
            <div className={`w-2/3 flex justify-between items-center px-10`}>
              <span className={'text-neutral-500'}>파일 유형</span>
              <span className={'p-5 font-medium'}>{fileType}</span>
            </div>
            <div className={'w-2/3'}>
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
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          form={'file-update'}
          className={'w-1/2 h-40 text-white rounded-md bg-primary-300'}
          disabled={mutation.isPending}
        >
          수정
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default FileUpdateModal;
