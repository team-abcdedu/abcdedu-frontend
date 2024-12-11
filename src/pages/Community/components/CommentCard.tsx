import { DownloadSimple } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Comment } from '@/types/community';
import { formatDate } from '@/utils/formatDate';

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
            {formatDate(comment.createdAt, true)}
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
          mode='edit'
          comment={comment}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <>
          <p>{comment.content}</p>
          {comment.fileUrl && (
            <Link
              className='flex justify-between items-center mt-12 mb-4 p-12 
              bg-primary-300/5 text-primary-300 text-14 rounded-lg w-130'
              to={comment.fileUrl}
            >
              파일 다운받기
              <DownloadSimple className='mt-1 block text-gray-600' size={17} />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
