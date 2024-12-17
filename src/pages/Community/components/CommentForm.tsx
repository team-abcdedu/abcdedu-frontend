import { PencilSimpleLine, Plus, Trash } from '@phosphor-icons/react';

import { Comment } from '@/types/community';

import useCommentForm from '../hooks/useCommentForm';

interface CommentForm {
  comment?: Comment;
  toggleEditMode?: () => void;
  mode?: 'create' | 'edit';
  postId: number;
}

export default function CommentForm({
  comment,
  toggleEditMode,
  mode = 'create',
  postId,
}: CommentForm) {
  const btnStyle = `rounded-[20px] ${mode === 'create' ? 'px-30 py-8' : 'px-16 py-4'}`;

  const {
    isButtonDisabled,
    register,
    handleFileChange,
    handleDeleteFile,
    handleClose,
    fileName,
    onSubmit,
  } = useCommentForm({ postId, comment, toggleEditMode });

  return (
    <form onSubmit={onSubmit} className={`${mode === 'edit' && 'pr-14'} mt-8`}>
      <textarea
        {...register('content', { required: '내용을 입력해 주세요.' })}
        className='border-1 rounded-lg w-full py-6 px-8'
        placeholder='자신의 의견을 자유롭게 표현해 주세요.'
      />

      <div className='flex justify-end gap-12 text-14'>
        <div className='flex justify-end items-center gap-14'>
          <label
            htmlFor='file'
            className='flex-row-center gap-4 text-gray-700 px-12 mb-2 cursor-pointer'
          >
            {fileName ? (
              <div className='py-5 flex items-center space-x-14'>
                <p>{fileName}</p>
                {mode === 'create' ? (
                  <button onClick={handleDeleteFile}>
                    <Trash size={18} />
                  </button>
                ) : (
                  <PencilSimpleLine size={18} className='text-neutral-500' />
                )}
              </div>
            ) : (
              <>
                <Plus weight='bold' className='text-primary-400' size={18} />
                파일 업로드
              </>
            )}
          </label>
          <input
            id='file'
            type='file'
            className='hidden'
            onChange={handleFileChange}
          />
        </div>
        <button
          type='submit'
          className={`bg-primary-400 text-white ${btnStyle} disabled:bg-primary-400/15`}
          disabled={isButtonDisabled}
        >
          {mode === 'create' ? '등록' : '완료'}
        </button>
        {mode === 'edit' && (
          <button
            type='button'
            onClick={handleClose}
            className={`bg-white border-1 border-neutral-200 ${btnStyle}`}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
}
