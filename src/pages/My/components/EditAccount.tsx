import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';

import useAccountForm from '../hooks/useAccountForm';
import { ProfileEditProps } from '../types';

export default function EditAccount({ onClose, onToggle }: ProfileEditProps) {
  const fieldStyle = 'flex flex-col focus-within:text-primary-300 transition-2';
  const inputStyle =
    'px-0 py-4 rounded-none border-b-1 border-zinc-300 border-neutral-500 focus:border-primary-300 text-neutral-600 transition-2';

  const { errors, fieldRules, register, onSubmit } = useAccountForm({
    onSuccess: onClose,
  });

  return (
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
            회원 정보 수정
          </h2>
          <div className='flex flex-col gap-20 mb-4 [&_span]:text-14'>
            <div className={fieldStyle}>
              <span>이메일</span>
              <input
                {...register('email', fieldRules.email)}
                id='email'
                type='text'
                className={inputStyle}
              />
              {errors.email && (
                <span className='!text-12 mt-2 text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className={fieldStyle}>
              <span>현재 비밀번호</span>
              <input
                {...register('password', fieldRules.password)}
                id='currentPw'
                type='password'
                autoComplete='false'
                className={inputStyle}
              />
              {errors.password && (
                <span className='!text-12 mt-2 text-red-500'>
                  {errors.password.message}
                </span>
              )}
            </div>
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
          <button
            type='button'
            className='block mx-auto mt-20 text-14 font-bold underline text-neutral-500 underline-offset-2'
            onClick={onToggle}
          >
            프로필 정보 수정하기
          </button>
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
  );
}
