import { Comment, comments } from '@/mock/Comment';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

export default function Comments() {
  return (
    <div className='px-20 mb-20'>
      <p className='font-semibold text-zinc-600 mt-20 text-sm mb-16'>
        댓글 <span className='text-primary-400'>{comments.length}</span>
      </p>
      <div>
        {comments.map((comment: Comment) => (
          <div key={comment.id} className='border-b py-16'>
            <CommentCard comment={comment} />
          </div>
        ))}
      </div>
      <div className='mt-40'>
        <CommentForm postId={1} mode='create' />
      </div>
    </div>
  );
}
