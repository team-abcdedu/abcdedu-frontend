import { FieldValues, useForm } from 'react-hook-form';

interface CommentForm {
  defaultValue?: string;
  toggleEditMode?: () => void;
  mode?: 'create' | 'edit';
  commentId?: number;
  postId?: number;
}

interface ICommentForm {
  content: string;
}

export default function CommentForm({
  defaultValue,
  toggleEditMode,
  mode = 'create',
}: CommentForm) {
  const btnStyle = `rounded-[20px] text-14 ${mode === 'create' ? 'px-30 py-8' : 'px-16 py-4'}`;

  const { register, handleSubmit, watch } = useForm<ICommentForm>({
    defaultValues: { content: defaultValue ?? '' },
  });

  const content = watch('content', defaultValue);

  const submitform = async (data: FieldValues) => {
    // API 요청 (생성 또는 수정)
    console.log(JSON.stringify(data));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(submitform)();
  };

  return (
    <form onSubmit={onSubmit} className={`${mode === 'edit' && 'pr-14'} mt-8`}>
      <textarea
        {...register('content', { required: '내용을 입력해 주세요.' })}
        className='border-1 rounded-lg w-full py-6 px-8'
        placeholder='자신의 의견을 자유롭게 표현해 주세요.'
      />
      <div className='flex justify-end gap-4'>
        <button
          type='submit'
          className={`bg-primary-400 text-white ${btnStyle} disabled:bg-primary-400/15`}
          disabled={!content.trim()}
        >
          {mode === 'create' ? '등록' : '완료'}
        </button>
        {mode === 'edit' && toggleEditMode && (
          <button
            type='button'
            onClick={toggleEditMode}
            className={`bg-white border-1 border-neutral-200 ${btnStyle}`}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
}
