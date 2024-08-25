import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import { AuthModalActions } from '@/types/auth';

export default function Register({ onClose, onToggle }: AuthModalActions) {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';
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
          <h2 className='text-24 font-semibold mb-24'>회원가입</h2>
          <form className='flex flex-col gap-12'>
            <div className={fieldStyle}>
              <label htmlFor='name'>이름</label>
              <input
                id='name'
                type='text'
                className='input-primary'
                placeholder='John Doe'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='email'>이메일</label>
              <input
                id='email'
                type='text'
                className='input-primary'
                placeholder='johndoe@gmail.com'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='password'>비밀번호</label>
              <input
                id='password'
                type='password'
                className='input-primary'
                placeholder='********'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='confrimPw'>비밀번호 확인</label>
              <input
                id='confrimPw'
                type='password'
                className='input-primary'
                placeholder='********'
              />
            </div>
          </form>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md'
        >
          가입하기
        </button>
        <button
          type='button'
          className='w-full text-14 text-primary-300'
          onClick={onToggle}
        >
          이미 계정이 있으신가요? 로그인하기
        </button>
      </Modal.Actions>
    </>
  );
}
