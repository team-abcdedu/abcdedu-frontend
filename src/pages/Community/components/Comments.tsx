import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useBoundStore from '@/stores';

import useGetComments from '../hooks/useGetComments';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

interface CommentsProps {
  postId: number;
  hasComments: boolean;
  commentAllow: boolean;
}

export default function Comments({
  postId,
  hasComments,
  commentAllow,
}: CommentsProps) {
  const user = useBoundStore(state => state.user);
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('comments_page')) || 1;

  const { list, totalElements, isLoading } = useGetComments({
    postId,
    page,
    enabled: hasComments,
  });

  const isAdminRole = user?.role === '관리자';

  return (
    <div
      ref={scrollTargetRef}
      className='px-20 pt-20 md:scroll-mt-110 scroll-mt-80'
    >
      <p className='font-semibold text-zinc-600 text-sm mb-16'>
        댓글{' '}
        <span className='text-primary-400'>{!isLoading && totalElements}</span>
      </p>
      <div>
        {list.map(comment => (
          <div key={comment.commentId} className='border-b py-16'>
            <CommentCard
              postId={postId}
              comment={comment}
              isMine={isAdminRole || user?.email === comment.writerEmail}
            />
          </div>
        ))}
        <Pagination
          currentPage={page}
          totalElements={totalElements}
          pageQueryKey='comments_page'
          scrollTarget={scrollTargetRef}
        />
      </div>
      {commentAllow && (
        <div className='mt-40'>
          {user && user.role !== '새싹' ? (
            <CommentForm postId={postId} mode='create' />
          ) : (
            <p className='text-center'>
              <span className='text-primary-400 font-bold'>학생</span>
              &nbsp;등급 이상만 댓글을 작성할 수 있습니다.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
