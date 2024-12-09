import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '@/components/ErrorBoundary';
import Head from '@/components/Head';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';

import useGetPost from '../hooks/useGetPost';

import Comments from './Comments';
import PostFormModal from './PostFormModal';
import PostNavigation from './PostNavigation';
import PostSection from './PostSection';

interface PostProps {
  postId: string;
  category: string;
}

export default function Post({ postId, category }: PostProps) {
  const { isVisible: isEditModalVisible, toggleModal: toggleEditModal } =
    useModal();

  const { data: post } = useGetPost(postId ?? '');
  const { reset } = useQueryErrorResetBoundary();

  const user = useBoundStore(state => state.user);
  const isAdminRole = user?.role === '관리자';

  return (
    <>
      <Head
        title={`${post?.title ? `${post.title} | ` : ''}ABCDEdu 커뮤니티`}
      />
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
      {post && (
        <ErrorBoundary onReset={reset}>
          <Comments postId={Number(postId)} commentAllow={post.commentAllow} />
        </ErrorBoundary>
      )}
      {post && (
        <PostNavigation
          category={category}
          prevPost={post.prev}
          nextPost={post.next}
        />
      )}
    </>
  );
}
