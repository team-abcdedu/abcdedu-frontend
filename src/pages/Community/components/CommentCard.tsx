import { useState } from 'react';

import { Comment } from '@/types/community';

import useCommentMutation from '../hooks/useCommentMutation';

import CommentForm from './CommentForm';
import MoreButton from './MoreButton';

interface CommentCardProps {
  postId: number;
  comment: Comment;
  isMine: boolean;
}

export default function CommentCard({
  postId,
  comment,
  isMine,
}: CommentCardProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const { deleteComment } = useCommentMutation({ postId });

  const handleDelete = () => {
    const ok = window.confirm('댓글을 삭제하시겠습니까?');
    if (ok) {
      deleteComment.mutate(comment.commentId);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <p className='font-semibold mr-4 text-sm'>{comment.writerName}</p>
          <p className='text-xs text-gray-500'>
            {comment.createdAt.split('T')[0]}
          </p>
        </div>
        {isMine && (
          <MoreButton
            iconSize='sm'
            onEdit={() => setIsEditMode(true)}
            onDelete={handleDelete}
          />
        )}
      </div>
      {isEditMode ? (
        <CommentForm
          postId={postId}
          commentId={comment.commentId}
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
