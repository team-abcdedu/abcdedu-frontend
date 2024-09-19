import { useState } from 'react';

import { Comment } from '@/mock/Comment';

import CommentForm from './CommentForm';
import MoreButton from './MoreButton';

export default function CommentCard({ comment }: { comment: Comment }) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const handleDelete = () => {
    const ok = window.confirm('댓글을 삭제하시겠습니까?');
    if (ok) {
      // API
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <p className='font-semibold mr-4 text-sm'>{comment.writer}</p>
          <p className='text-xs text-gray-500'>
            {comment.createdAt.split('T')[0]}
          </p>
        </div>
        <MoreButton
          iconSize='sm'
          onEdit={() => setIsEditMode(true)}
          onDelete={handleDelete}
        />
      </div>
      {isEditMode ? (
        <CommentForm
          commentId={comment.id}
          mode='edit'
          defaultValue={comment.content}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <p>{comment.content}</p>
      )}
    </div>
  );
}
