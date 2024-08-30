import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import useLoginForm from '@/hooks/auth/useLoginForm';
import { AuthModalActions } from '@/types/auth';

export default function Login({ onClose, onToggle }: AuthModalActions) {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';

  const { hasErrors, getErrorMessage, register, onSubmit } = useLoginForm();

  return (
    <>
      <Modal.Content>
        <div>
          <button
            type='button'
            className='block ml-auto -mt-6 -mr-10'
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <h2 className='text-24 font-semibold mb-24'>로그인</h2>
          <form className='flex flex-col gap-12 mb-4'>
            <div className={fieldStyle}>
              <label htmlFor='email'>이메일</label>
              <input
                {...register('email', { required: true })}
                id='email'
                type='text'
                className='input-primary'
                placeholder='johndoe@gmail.com'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='password'>비밀번호</label>
              <input
                {...register('password', { required: true })}
                id='password'
                type='password'
                className='input-primary'
                placeholder='********'
                autoComplete='false'
              />
            </div>
            {hasErrors && (
              <span className='text-12 text-center text-red-500'>
                {getErrorMessage()}를 입력하세요.
              </span>
            )}
          </form>
          {/* 고도화 단계에서 개발 */}
          {/* <Link className='flex justify-end text-14 text-primary-300' to='/'>
            비밀번호 찾기
          </Link> */}
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md'
          onClick={onSubmit}
        >
          로그인
        </button>
        <button
          type='button'
          className='w-full text-14 text-primary-300'
          onClick={onToggle}
        >
          계정 생성하기
        </button>
      </Modal.Actions>
    </>
  );
}
