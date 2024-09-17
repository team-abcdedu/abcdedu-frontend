import { DotsThreeVertical } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

import { get, patch, del } from '@/libs/api';
import { comments } from '@/mock/Comment';
// import { posts } from '@/mock/Community';

import { PostDetails } from './components/PostData';
import { Comment } from './types/Comment';

function PostDetail() {
  // const { postId } = useParams<{ postId: string }>();
  // const numericPostId = parseInt(postId || '0', 10);
  // const post = posts.find(p => p.id === numericPostId);
  const [commentText, setCommentText] = useState<string>('');
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [menuVisible, setMenuVisible] = useState<{ [key: number]: boolean }>(
    {},
  );
  // const [isEditing, setIsEditing] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null); // State to track editing comment ID
  const [editContent, setEditContent] = useState(comments || '');

  const toggleMenu = (commentId: number) => {
    setMenuVisible(prev => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  // 댓글 로드
  useEffect(() => {
    get<Comment[]>(`/posts/${post?.id}/comments/`)
      .then(res => {
        setCommentList(res);
        console.log('댓글 받기 성공');
      })
      .catch(err => {
        console.log('error:', err);
      });
  }, []);

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  // 댓글 작성(추가)
  const handleSubmitComment = async () => {
    const requestData = {
      // id: 0,
      // author: '사용자 이름',
      content: commentText,
      // timestamp: new Date().toISOString(),
    };
    try {
      const newComment: Comment = await post<Comment[]>(
        `posts/${post?.id}/comments/`,
        requestData,
      );
      console.log('댓글 작성 성공!', newComment);
      setCommentList(prev => [...prev, newComment]);
      setCommentText('');
    } catch (err) {
      console.log('댓글 작성 실패..', err);
    }
  };

  const handleEditConfirm = async () => {
    try {
      await patch(`/comments/${isEditing}`, { content: editContent });
      setCommentList(prev =>
        prev.map(comment =>
          comment.id === isEditing
            ? { ...comment, content: editContent }
            : comment,
        ),
      );
      setIsEditing(null);
      alert('수정이 완료되었습니다.');
    } catch (error) {
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async (commentId: number) => {
    const confirmed = window.confirm('해당 댓글을 정말 삭제하시겠습니까?');
    if (confirmed && commentId) {
      try {
        await del(`posts/${post?.id}/comments/${commentId}`);
        alert('삭제 성공');
        window.location.reload();
      } catch (error) {
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      <PostDetails post={post} onClose={() => {}} />
      {/* 해당 글에 대한 댓글 보여주기 */}
      <div className='px-20 mb-20'>
        <p className='mt-20 text-sm mb-[10px]'>댓글 {post.comments}</p>

        {/* 댓글 목록 렌더링 */}
        <div className='mt-4'>
          {commentList?.map((comment: Comment) => (
            <div key={comment.id} className='border-b py-6'>
              <div className='flex items-center justify-between'>
                {/* <div className='flex items-center '>
                  <p className='font-semibold mr-4'>{comment.author}</p>
                  <p className='text-xs text-gray-500'>{comment.timestamp}</p>
                </div> */}
                <button
                  onClick={() => toggleMenu(comment.id)}
                  className='relative'
                >
                  <DotsThreeVertical size={15} className='cursor-pointer' />
                  {menuVisible && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg z-10 rounded-lg border'>
                      <button
                        onClick={() => setIsEditing(true)}
                        className='block w-full py-2 text-sm text-gray-700 hover:bg-gray-200'
                      >
                        수정
                      </button>
                      <hr />
                      <button
                        onClick={handleDelete}
                        className='block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-200'
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </button>
              </div>
              {/* <p>{comment.content}</p> */}
              {isEditing ? (
                <>
                  <textarea
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                    rows={10}
                  />
                  <div className='flex justify-end mt-4'>
                    <button
                      onClick={handleEditConfirm}
                      className='mb-7 px-8 py-6 bg-primary-300 text-white rounded-lg hover:bg-pimary-200'
                    >
                      수정완료
                    </button>
                  </div>
                </>
              ) : (
                // Show post content if not in editing mode
                <p className='text-sm'>{comment.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* 댓글 입력 폼 */}
        <div className='flex flex-row space-x-8 mt-20'>
          <textarea
            placeholder='자신의 의견을 자유롭게 표현해주세요.'
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            className='w-full border rounded p-2 resize-none'
          />
          <button
            onClick={handleSubmitComment}
            className='w-1/6 mt-2 py-2 px-4 bg-gray-300 rounded hover:bg-primary-400'
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
