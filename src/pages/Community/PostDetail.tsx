import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Navigate, useParams } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import AccessError from '@/components/ErrorBoundary/AccessError';
import { ApiError } from '@/libs/errors';
import useBoundStore from '@/stores';

import Post from './components/Post';
import { boardMetaData } from './constants/communityInfo';

export default function PostDetail() {
  const { category, postId } = useParams();
  const user = useBoundStore(state => state.user);
  const isPostIdNumeric = !Number.isNaN(Number(postId));
  const { reset } = useQueryErrorResetBoundary();

  // 경로 예외 처리
  if (!category || !(category in boardMetaData))
    return <Navigate to='/community' replace />;

  // postId 패턴 및 API 요청 예외 처리
  if (!postId || !isPostIdNumeric) {
    alert('게시글 정보를 찾을 수 없습니다.');
    return <Navigate to={`/community/${category}`} replace />;
  }

  return (
    <div className='text-left mt-10 min-h-[500px]'>
      {!user && (
        <AccessError
          type='게시글'
          isPrevPageDirection
          error={{ status: 401 } as ApiError}
        />
      )}
      <ErrorBoundary
        accessErrorFallback={
          <AccessError type={'게시글'} isPrevPageDirection />
        }
        onReset={reset}
      >
        <Post postId={postId} category={category} />
      </ErrorBoundary>
    </div>
  );
}
