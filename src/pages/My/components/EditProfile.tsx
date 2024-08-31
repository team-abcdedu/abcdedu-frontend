import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';

import { ProfileEditProps } from '../types';

export default function EditProfile({ onClose }: ProfileEditProps) {
  const fieldStyle = 'flex flex-col focus-within:text-primary-300 transition-2';
  const inputStyle =
    'px-0 py-4 rounded-none border-b-1 border-zinc-300 border-neutral-500 focus:border-primary-300 text-neutral-600 transition-2';
  const labelStyle =
    'w-148 h-148 border-1 border-zinc-300 rounded-md text-center flex-row-center text-14 text-neutral-600/35 lg:hover:border-primary-400 lg:hover:text-primary-400 transition-2 cursor-pointer';

  return (
    <>
      <Modal.Content>
        <div className='px-16 pb-12'>
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
          <form className='flex flex-col gap-20 mb-4 [&_span]:text-14'>
            <div className={fieldStyle}>
              <span>이름</span>
              <input id='name' type='text' className={inputStyle} />
            </div>
            <div className='flex-col-center gap-8'>
              <span className='w-full'>프로필 사진 업로드</span>
              <label htmlFor='file-input' className={labelStyle}>
                Click to upload an image
              </label>
              <input id='file-input' type='file' className='hidden' />
            </div>
            <div className={fieldStyle}>
              <span>소속 학교</span>
              <input id='password' type='text' className={inputStyle} />
            </div>
            <div className={fieldStyle}>
              <span>학번</span>
              <input id='password' type='text' className={inputStyle} />
            </div>
          </form>
          {/* <button
            type='button'
            className='block mx-auto mt-20 text-14 font-bold underline text-neutral-500 underline-offset-2'
            onClick={onToggle}
          >
            이메일/비밀번호 변경하기(비밀번호 인증 필요)
          </button> */}
        </div>
      </Modal.Content>
      <Modal.Actions direction='row'>
        <button
          type='submit'
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
    </>
  );
}
