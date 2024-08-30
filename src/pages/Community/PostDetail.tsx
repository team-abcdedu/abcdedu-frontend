import { useParams } from 'react-router-dom';

import { posts } from '@/mock/Community';

import { PostDetails } from './components/TempData';

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const numericPostId = parseInt(postId || '0', 10);
  const post = posts.find(p => p.id === numericPostId);

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <PostDetails post={post} onClose={() => {}} />
    </div>
  );
}

export default PostDetail;
