import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';

import { ProfileEditProps } from '../types';

export default function EditAccount({ onClose, onToggle }: ProfileEditProps) {
  const fieldStyle = 'flex flex-col focus-within:text-primary-300 transition-2';
  const inputStyle =
    'px-0 py-4 rounded-none border-b-1 border-zinc-300 border-neutral-500 focus:border-primary-300 text-neutral-600 transition-2';

  const handleClose = () => {
    onClose();
    onToggle(); // 프로필 수정 모달로 초기화
  };

  return (
    <>
      <Modal.Content>
        <div className='px-16'>
          <button
            type='button'
            className='absolute top-12 right-12'
            onClick={handleClose}
          >
            <X size={24} />
          </button>
          <h2 className='text-20 text-center font-semibold pt-12 mb-24'>
            회원 정보 수정
          </h2>
          <form className='flex flex-col gap-20 mb-4 [&_span]:text-14'>
            <div className={fieldStyle}>
              <span>이메일</span>
              <input id='name' type='text' className={inputStyle} />
            </div>
            <div className={fieldStyle}>
              <span>현재 비밀번호</span>
              <input id='currentPw' type='password' className={inputStyle} />
            </div>
            <div className={fieldStyle}>
              <span>새 비밀번호</span>
              <input id='newPw' type='password' className={inputStyle} />
            </div>
            <div className={fieldStyle}>
              <span>새 비밀번호 확인</span>
              <input id='confirmPw' type='password' className={inputStyle} />
            </div>
          </form>
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
          type='submit'
          className='w-full h-45 px-24 text-15 
        text-primary-400 btn-white-pb font-semibold rounded-md'
          onClick={handleClose}
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
    </>
  );
}
