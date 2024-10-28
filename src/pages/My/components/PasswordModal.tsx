import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';

import usePasswordForm from '../hooks/usePasswordForm';

export default function PasswordModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const fieldStyle = 'flex flex-col focus-within:text-primary-300 transition-2';
  const inputStyle =
    'px-0 py-4 rounded-none border-b-1 border-zinc-300 border-neutral-500 focus:border-primary-300 text-neutral-600 transition-2';

  const { errors, fieldRules, register, onSubmit } = usePasswordForm({
    onSuccess: onClose,
  });

  return (
    <Modal isVisible={isVisible}>
      <form onSubmit={onSubmit}>
        <Modal.Content>
          <div className='px-16'>
            <button
              type='button'
              className='absolute top-12 right-12'
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <h2 className='text-20 text-center font-semibold pt-12 mb-24'>
              비밀번호 변경
            </h2>
            <div className='flex flex-col gap-20 mb-4 [&_span]:text-14'>
              <div className={fieldStyle}>
                <span>새 비밀번호</span>
                <input
                  {...register('newPw', fieldRules.newPw)}
                  id='newPw'
                  type='password'
                  autoComplete='false'
                  className={inputStyle}
                />
                {errors.newPw && (
                  <span className='!text-12 mt-2 text-red-500'>
                    {errors.newPw.message}
                  </span>
                )}
              </div>
              <div className={fieldStyle}>
                <span>새 비밀번호 확인</span>
                <input
                  {...register('confirmPw', fieldRules.confirmPw)}
                  id='confirmPw'
                  type='password'
                  autoComplete='false'
                  className={inputStyle}
                />
                {errors.confirmPw && (
                  <span className='!text-12 mt-2 text-red-500'>
                    {errors.confirmPw.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Actions direction='row'>
          <button
            type='button'
            className='w-full h-45 px-24 text-15 
        text-primary-400 btn-white-pb font-semibold rounded-md'
            onClick={onClose}
          >
            취소
          </button>
          <button
            type='submit'
            className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md'
          >
            변경사항 저장
          </button>
        </Modal.Actions>
      </form>
    </Modal>
  );
}
