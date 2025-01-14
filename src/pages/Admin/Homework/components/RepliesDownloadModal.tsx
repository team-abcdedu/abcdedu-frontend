import { X } from '@phosphor-icons/react';

import FormErrorMessage from '@/components/Form/FormErrorMessage';
import Modal from '@/components/Modal';

import useRepliesDownload from '../hooks/useRepliesDownload';
import useRepliesDownloadForm, {
  IRepliesDownloadForm,
} from '../hooks/useRepliesDownloadForm';

interface RepliesDownloadModalProps {
  homeworkId: number;
  isVisible: boolean;
  onClose: () => void;
}

function RepliesDownloadModal({
  homeworkId,
  isVisible,
  onClose,
}: RepliesDownloadModalProps) {
  const { register, errors, fieldRules, reset, handleSubmit } =
    useRepliesDownloadForm();
  const { handleDownload } = useRepliesDownload({ homeworkId });

  const onSubmit = async (data: IRepliesDownloadForm) => {
    const result = window.confirm('응답 파일을 다운로드합니다.');
    if (result) {
      const downloadResult = await handleDownload(data);
      if (downloadResult.status === 'success') {
        reset();
      }
      if (downloadResult.status === 'error') {
        alert(downloadResult.message);
      }
    }
  };

  const modalClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isVisible={isVisible} size={'sm'}>
      <button
        type='button'
        className='absolute top-12 right-12'
        onClick={modalClose}
        aria-label={'close-modal'}
      >
        <X size={20} />
      </button>
      <Modal.Content>
        <form
          id={'download-form'}
          onSubmit={handleSubmit(onSubmit)}
          className={'flex-col-center gap-15'}
        >
          <div className={'text-20 font-semibold'}>조회 기간</div>
          <div className={'grid grid-cols-2 gap-5 place-items-center'}>
            <label htmlFor={'from-date'} className={'font-medium'}>
              시작
            </label>
            <input
              {...register('fromDate', fieldRules.fromDate)}
              id={'from-date'}
              type={'date'}
              className={'border-b-1 border-primary-300'}
            />
            <div className={'col-span-2'}>
              {errors.fromDate && (
                <FormErrorMessage fieldErrors={errors.fromDate} />
              )}
            </div>
            <label htmlFor={'to-date'} className={'font-medium'}>
              종료
            </label>
            <input
              {...register('toDate', fieldRules.toDate)}
              id={'to-date'}
              type={'date'}
              className={'border-b-1 border-primary-300'}
            />
            <div className={'col-span-2'}>
              {errors.toDate && (
                <FormErrorMessage fieldErrors={errors.toDate} />
              )}
            </div>
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <button
          type={'submit'}
          form={'download-form'}
          className={'py-5 px-10 text-white bg-primary-100 rounded'}
        >
          다운로드
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default RepliesDownloadModal;
