import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import { ContactType } from '@/types/contact';

import useContactForm from '../hooks/useContactForm';

interface ContactModalProps {
  selected: { label: string; type: ContactType };
  isVisible: boolean;
  onClose: () => void;
}

export default function ContactModal({
  selected,
  isVisible,
  onClose,
}: ContactModalProps) {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14 [&>label]:pb-4';

  const { errors, fieldRules, register, reset, onSubmit } = useContactForm({
    contactType: selected.type,
    onSuccess: onClose,
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal size='lg' isVisible={isVisible} onClose={handleClose}>
      <Modal.Content>
        <div className='pt-16'>
          <button
            type='button'
            className='absolute top-12 right-12'
            onClick={handleClose}
          >
            <X size={24} />
          </button>
          <h2 className='text-30 font-semibold mb-24 text-center'>
            {selected.label}
          </h2>
          <form className='flex flex-col gap-20'>
            <div className={fieldStyle}>
              <label htmlFor='userName'>이름</label>
              <input
                {...register('userName', fieldRules.userName)}
                id='userName'
                type='text'
                className='input-primary'
                placeholder='John Doe'
              />
              {errors.userName && (
                <span className='text-12 text-red-500'>
                  {errors.userName.message}
                </span>
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='phoneNumber'>연락처</label>
              <input
                {...register('phoneNumber', fieldRules.phoneNumber)}
                id='phoneNumber'
                type='number'
                inputMode='numeric'
                pattern='[0-9]*'
                className='input-primary'
                placeholder='01012345678'
              />
              {errors.phoneNumber && (
                <span className='text-12 text-red-500'>
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='email'>이메일</label>
              <input
                {...register('email', fieldRules.email)}
                id='email'
                type='text'
                className='input-primary'
                placeholder='johndoe@gmail.com'
              />
              {errors.email && (
                <span className='text-12 text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='title'>제목</label>
              <input
                {...register('title', fieldRules.title)}
                id='title'
                type='text'
                className='input-primary'
                placeholder='title'
              />
              {errors.title && (
                <span className='text-12 text-red-500'>
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='content'>내용</label>
              <textarea
                {...register('content', fieldRules.content)}
                id='content'
                className='input-primary py-4 !h-150'
                placeholder='Type here...'
              />
              {errors.content && (
                <span className='text-12 text-red-500'>
                  {errors.content.message}
                </span>
              )}
            </div>
          </form>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='max-w-285 w-full h-50 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-[20px]'
          onClick={onSubmit}
        >
          보내기
        </button>
      </Modal.Actions>
    </Modal>
  );
}