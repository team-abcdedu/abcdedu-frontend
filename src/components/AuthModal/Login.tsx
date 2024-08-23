import { X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { AuthModalActions } from '@/types/auth';

import Modal from '../Modal';

export default function Login({ onClose, onToggle }: AuthModalActions) {
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
          <h2 className='text-24 font-semibold mb-24'>로그인</h2>
          <form className='flex flex-col gap-12 mb-4'>
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
          </form>
          <Link className='flex justify-end text-14 text-primary-300' to='/'>
            비밀번호 찾기
          </Link>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md'
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
