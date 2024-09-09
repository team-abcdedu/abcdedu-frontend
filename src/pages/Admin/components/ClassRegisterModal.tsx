import Modal from '@/components/Modal';

import useClassRegisterForm from '../hooks/useClassRegisterForm';

interface ClassRegisterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function ErrorMessage({ message }: { message: string }) {
  return <span className={'text-13 text-red-700'}>{message}</span>;
}

function ClassRegisterModal({ isVisible, onClose }: ClassRegisterModalProps) {
  const { register, fieldRules, errors, onSubmit, reset } =
    useClassRegisterForm({ onClose });

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={closeModal}>
      <Modal.Content>
        <form
          id={'class-register'}
          className={'w-full h-full flex flex-col gap-5 text-15'}
          onSubmit={onSubmit}
        >
          <label htmlFor={'title'} className={'flex flex-col'}>
            클래스명
            <input
              {...register('title', fieldRules.title)}
              id={'title'}
              className={'input-primary !p-10'}
            />
            {errors.title && (
              <ErrorMessage message={errors.title.message || ''} />
            )}
          </label>
          <label htmlFor={'type'} className={'flex flex-col'}>
            타입 (A,B,C,D)
            <input
              {...register('type', fieldRules.type)}
              id={'type'}
              className={'input-primary !p-10'}
            />
            {errors.type && (
              <ErrorMessage message={errors.type.message || ''} />
            )}
          </label>
          <label htmlFor={'description'} className={'flex flex-col'}>
            설명
            <textarea
              {...register('description', fieldRules.description)}
              id={'description'}
              className={'input-primary !h-[150px] !p-10'}
            />
            {errors.description && (
              <ErrorMessage message={errors.description.message || ''} />
            )}
          </label>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <div className={'w-full flex flex-col gap-3'}>
          <button
            form={'class-register'}
            className={
              'w-full h-50 bg-primary-300 text-15 text-white font-semibold rounded-md'
            }
          >
            등록
          </button>
          <button
            type={'button'}
            onClick={onClose}
            className={
              'w-full h-50 text-15 font-semibold text-primary-300 rounded-md border-1 border-primary-300'
            }
          >
            취소
          </button>
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default ClassRegisterModal;
