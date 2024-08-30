import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { posts } from '@/mock/Community';

import { PostDetails } from './components/PostData';
// import { Comment } from './types/Comment';

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const numericPostId = parseInt(postId || '0', 10);
  const post = posts.find(p => p.id === numericPostId);

  const [commentText, setCommentText] = useState<string>('');

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <PostDetails post={post} onClose={() => {}} />
      {/* 차후 댓글 수 표기 로직 추가 */}
      <div className='px-30 mb-20'>
        <p className='mt-20 text-sm mb-[10px]'>댓글 0</p>
        <div className='flex flex-row space-x-8 mt-4'>
          <textarea
            placeholder='자신의 의견을 자유롭게 표현해주세요.'
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            className='w-full border rounded p-2 resize-none'
          />
          <button className='w-1/6 mt-2 py-2 px-4 bg-gray-300 rounded hover:bg-primary-400'>
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
