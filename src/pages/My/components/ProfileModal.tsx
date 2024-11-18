import { X, XCircle } from '@phosphor-icons/react';

import FormErrorMessage from '@/components/FormErrorMessage';
import Modal from '@/components/Modal';

import useProfileForm from '../hooks/useProfileForm';
import { ProfileEditModalProps } from '../types';

export default function ProfileModal({
  user,
  isVisible,
  onClose,
}: ProfileEditModalProps) {
  const fieldStyle = 'flex flex-col focus-within:text-primary-300 transition-2';
  const inputStyle =
    'px-0 py-4 rounded-none border-b-1 border-zinc-300 border-neutral-500 focus:border-primary-300 text-neutral-600 transition-2';
  const filelabelStyle =
    'relative w-148 h-148 border-1 border-zinc-300 rounded-md text-center flex-row-center text-14 text-neutral-600/35 lg:hover:border-primary-400 lg:hover:text-primary-400 transition-2 cursor-pointer overflow-hidden';

  const {
    isSubmitButtonDisabled,
    handleFileChange,
    imagePreview,
    resetImageFile,
    reset,
    errors,
    fieldRules,
    register,
    onSubmit,
  } = useProfileForm({ user, onClose });

  const handleResetImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetImageFile();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isVisible={isVisible}>
      <Modal.Content>
        <div className='px-16 pb-12'>
          <button
            type='button'
            className='absolute top-12 right-12'
            onClick={handleClose}
            aria-label='닫기'
          >
            <X size={24} />
          </button>
          <h2 className='text-20 text-center font-semibold pt-12 mb-24'>
            회원 정보 수정
          </h2>
          <form className='flex flex-col gap-20 mb-4 [&_label]:text-14'>
            <div className={fieldStyle}>
              <label htmlFor='name'>이름</label>
              <input
                {...register('name', fieldRules.name)}
                id='name'
                type='text'
                className={inputStyle}
              />
              {errors.name && <FormErrorMessage fieldErrors={errors.name} />}
            </div>
            <div className='flex-col-center gap-8'>
              <span className='w-full text-14'>프로필 사진 업로드</span>
              <label htmlFor='file-input' className={filelabelStyle}>
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      className='w-full h-full object-cover'
                      alt='profile'
                    />
                    <button
                      type='button'
                      aria-label='프로필 이미지 삭제'
                      className='absolute top-4 right-4 rounded-full bg-white text-primary-400'
                      onClick={handleResetImage}
                    >
                      <XCircle size={28} weight='fill' />
                    </button>
                  </>
                ) : (
                  'Click to upload an image'
                )}
              </label>
              <input
                onChange={handleFileChange}
                id='file-input'
                type='file'
                accept='image/*'
                className='hidden'
                data-testid='file-input'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='school'>소속 학교</label>
              <input
                {...register('school', fieldRules.school)}
                id='school'
                type='text'
                className={inputStyle}
              />
              {errors.school && (
                <FormErrorMessage fieldErrors={errors.school} />
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='studentId'>학번</label>
              <input
                {...register('studentId')}
                id='studentId'
                type='number'
                className={inputStyle}
              />
            </div>
          </form>
        </div>
      </Modal.Content>
      <Modal.Actions direction='row'>
        <button
          type='button'
          className='w-full h-45 px-24 text-15 
        text-primary-400 btn-white-pb font-semibold rounded-md'
          onClick={handleClose}
        >
          취소
        </button>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md disabled:bg-primary-400/15'
          onClick={onSubmit}
          disabled={isSubmitButtonDisabled}
        >
          변경사항 저장
        </button>
      </Modal.Actions>
    </Modal>
  );
}
