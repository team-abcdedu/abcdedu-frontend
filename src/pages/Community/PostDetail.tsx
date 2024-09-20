import { Navigate, useParams } from 'react-router-dom';

import AccessError from '@/components/AccessError';
import Head from '@/components/Head';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';

import Comments from './components/Comments';
import LevelUpButton from './components/LevelUpButton';
import PostFormModal from './components/PostFormModal';
import PostSection from './components/PostSection';
import { boardMetaData } from './constants/communityInfo';
import useGetPost from './hooks/useGetPost';

export default function PostDetail() {
  const { isVisible: isEditModalVisible, toggleModal: toggleEditModal } =
    useModal();
  const { category, postId } = useParams();
  const user = useBoundStore(state => state.user);
  const isPostIdNumeric = !Number.isNaN(Number(postId));
  const { data: post, isLoading, errorCode } = useGetPost(postId ?? '');
  const isForbidden = errorCode === 403;

  // 경로 예외 처리
  if (!category || !(category in boardMetaData))
    return <Navigate to='/community' replace />;

  // postId 패턴 및 API 요청 예외 처리
  if (!isPostIdNumeric || (!isLoading && !isForbidden && !post && user)) {
    alert('게시글 정보를 찾을 수 없습니다.');
    return <Navigate to={`/community/${category}`} replace />;
  }

  const isAdminRole = user?.role === '관리자';

  // 등업 게시판 & 관리자 권한일 경우에만 등업시키기 버튼 렌더링
  const isLevelUpButtonVisible = isAdminRole && category === 'levelup';

  return (
    <div className='text-left mt-10 min-h-[500px]'>
      <Head
        title={`${post?.title ? `${post.title} | ` : ''}ABCDEdu 커뮤니티`}
      />
      {!isLoading && isForbidden && (
        <AccessError type='게시글' isPrevPageDirection errorCode={errorCode} />
      )}
      {!isLoading && !user && (
        <AccessError type='게시글' isPrevPageDirection errorCode={401} />
      )}
      {post && (
        <>
          <PostSection
            id={Number(postId)}
            post={post}
            category={category ?? ''}
            toggleEditModal={toggleEditModal}
            isMine={isAdminRole || user?.email === post.writerEmail}
          />
          <PostFormModal
            post={post}
            isVisible={isEditModalVisible}
            onClose={toggleEditModal}
          />
        </>
      )}
      {isLevelUpButtonVisible && <LevelUpButton postId={Number(postId)} />}
      {post && post.commentAllow && <Comments postId={Number(postId)} />}
    </div>
  );
}
