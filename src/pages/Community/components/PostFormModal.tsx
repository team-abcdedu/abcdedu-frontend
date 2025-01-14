import { Trash, X } from '@phosphor-icons/react';

import FormErrorMessage from '@/components/Form/FormErrorMessage';
import Modal from '@/components/Modal';
import { Post } from '@/types/community';
import { getFileName } from '@/utils/getFileName';

import usePostForm from '../hooks/usePostForm';

export interface PostFormModalProps {
  post?: Post;
  isVisible: boolean;
  onClose: () => void;
}

export default function PostFormModal({
  post,
  isVisible,
  onClose,
}: PostFormModalProps) {
  const {
    isSubmitButtonDisabled,
    fileUrl,
    isFileInputVisible,
    handleDeleteFileUrl,
    register,
    errors,
    handleFileChange,
    handleClose,
    onSubmit,
  } = usePostForm({
    post,
    onSuccess: onClose,
  });

  const submitButtonStyle =
    'px-16 bg-primary-400 disabled:bg-primary-400/15 text-white';

  return (
    <Modal isVisible={isVisible} size='lg' mobileFullScreen>
      <Modal.Content>
        <form className='flex flex-col' onSubmit={onSubmit}>
          <div className='flex justify-between items-center max-sm:pb-12'>
            <h2 className='hidden sm:block text-lg font-bold'>글쓰기</h2>
            <button type='button' aria-label='닫기' onClick={handleClose}>
              <X size={24} />
            </button>
            <button
              className={`${submitButtonStyle} block sm:hidden rounded-full w-80 py-6`}
              type='submit'
              disabled={isSubmitButtonDisabled}
            >
              {!post ? '등록' : '수정'}
            </button>
          </div>
          <div className='p-4'>
            <div className='my-8 flex flex-col gap-4'>
              <input
                id='title'
                {...register('title', { required: '제목을 입력하세요.' })}
                type='text'
                placeholder='제목을 입력하세요.'
                className='w-full border rounded py-6 px-8'
              />
              {errors.title && <FormErrorMessage fieldErrors={errors.title} />}
            </div>
            <div className='mb-20 flex flex-col gap-4'>
              <textarea
                id='content'
                {...register('content', { required: '내용을 입력하세요.' })}
                placeholder='내용을 입력하세요.'
                className='w-full h-[384px] max-h-[45vh] border rounded py-6 px-8'
              />
              {errors.content && (
                <FormErrorMessage fieldErrors={errors.content} />
              )}
            </div>
            {isFileInputVisible && (
              <div className='mb-20 flex items-center space-x-14'>
                <label htmlFor='file' className='block text-gray-700 text mb-2'>
                  첨부파일
                </label>
                <input
                  id='file'
                  type='file'
                  className='w-2/3 border rounded p-2 h-full'
                  onChange={handleFileChange}
                />
              </div>
            )}
            {fileUrl && !isFileInputVisible && (
              <div className='mb-20 py-5 flex items-center space-x-14'>
                <p>첨부파일 &nbsp;&nbsp;{getFileName(fileUrl)}</p>
                <button
                  type='button'
                  aria-label='파일 삭제'
                  onClick={handleDeleteFileUrl}
                >
                  <Trash size={20} className='text-neutral-500' />
                </button>
              </div>
            )}
            <div className='sm:block flex mb-20'>
              <div className='flex sm:mb-4 flex-1 items-center gap-4'>
                <input type='checkbox' id='secret' {...register('secret')} />
                <label htmlFor='secret' className='text-14'>
                  비밀글 설정
                </label>
              </div>
              <div className='flex flex-1 items-center gap-4'>
                <input
                  type='checkbox'
                  id='commentAllow'
                  {...register('commentAllow')}
                />
                <label htmlFor='commentAllow' className='text-14'>
                  댓글 허용
                </label>
              </div>
            </div>
            <button
              className={`${submitButtonStyle} hidden sm:block mx-auto w-160 py-8 rounded-full`}
              type='submit'
              disabled={isSubmitButtonDisabled}
            >
              {!post ? '등록' : '수정'}
            </button>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}
