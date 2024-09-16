import { DownloadSimple, DotsThreeVertical } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { del, patch } from '@/libs/api';

import { PostTableProps, PostDetailsProps } from '../types/PostData';

export function PostTable({ posts, isLevelingUp }: PostTableProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm sm:text-base'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            {isLevelingUp && <th className='px-20 py-10'>등업</th>}
            {/* <th className='px-20 py-10'>No.</th> */}
            <th className='px-20 py-10'>제목</th>
            {/* <th className='hidden md:table-cell px-20 py-10'>글쓴이</th> */}
            {/* <th className='hidden md:table-cell px-20 py-10'>작성시간</th> */}
            {/* <th className='hidden md:table-cell px-20 py-10'>조회수</th> */}
            <th className='hidden md:table-cell px-20 py-10'>댓글</th>
            {/* <th className='hidden md:table-cell px-20 py-10'>좋아요</th> */}
          </tr>
          å
        </thead>
        <tbody>
          {posts?.map(post => (
            <tr
              key={post?.data?.title} // key 가 id였는데 없어서 title로
              className='space-x-5 border-b border-b-gray-400 cursor-pointer'
            >
              {isLevelingUp && (
                <td className='px-20 py-10'>
                  <input type='checkbox' />
                </td>
              )}
              {/* <td className='px-20 py-10'>{post.id}</td> */}
              <td className='px-20 py-10'>
                <Link to={`/community_project/${post?.data?.title}`}>
                  <p>{post?.data?.title}</p>
                </Link>
                {/* <div className='block md:hidden text-xs text-gray-500'>
                  <Link to={`/community_project/${post.data.title}`}>
                    <p>
                      {post.author} | {post.timestamp}
                    </p>
                  </Link>
                </div> */}
              </td>
              {/* <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/community_project/${post.data.title}`}>
                  <p>{post.author}</p>
                </Link>
              </td> */}
              {/* <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/community_project/${post.id}`}>
                  <p>{post.timestamp}</p>
                </Link>
              </td> */}
              {/* <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/community_project/${post.id}`}>
                  <p>{post.views}</p>
                </Link>
              </td> */}
              {/* <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/community_project/${post.id}`}>
                  <p>{post.comments}</p>
                </Link>
              </td> */}
              {/* <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`/community_project/${post.id}`}>
                  <p>{post.likes}</p>
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PostDetails({ post }: PostDetailsProps) {
  const [menuVisible, setMenuVisible] = useState(false); // State to control menu visibility
  const [isEditing, setIsEditing] = useState(false); // Edit mode state
  const [editContent, setEditContent] = useState(post?.data.content || ''); // Editing content state

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  if (!post) return null;

  const handleEditConfirm = async () => {
    try {
      await patch(`/posts/${post?.data?.title}`, { content: editContent });
      alert('수정이 완료되었습니다.');
    } catch (error) {
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('해당 글을 정말 삭제하시겠습니까?');
    if (confirmed && post?.data.title) {
      try {
        await del(`/posts/${post.data.title}`);
        alert('삭제 성공');
        window.location.reload();
      } catch (error) {
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className='text-left mt-10'>
      <hr className='border-1 border-black w-full' />

      <p className='flex flex-col sm:flex-row justify-between px-20 py-4 sm:py-10 bg-gray-100 relative'>
        <h2 className='text-20 font-bold'>{post.data.title}</h2>
        <div className='flex items-center'>
          <button>
            <p className='flex flex-row text-sm text-gray-500'>
              파일 다운받기
              <DownloadSimple size={17} />
            </p>
          </button>
          {/* 게시글 수정 삭제 */}
          <button onClick={toggleMenu} className='relative'>
            <DotsThreeVertical size={20} />
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
      </p>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-row px-10 md:px-20 py-10 space-x-10'>
        {/* <p className=' text-primary-400 text-sm'>{post.author}</p> */}
        {/* <p className='text-gray-400 text-sm'>{`등록일: ${post.timestamp}`}</p> */}
        {/* <p className='text-gray-400 text-sm'>{`조회수: ${post.views}`}</p> */}
      </div>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-col px-20'>
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
                // className='mb-7 px-8 py-6 bg-primary-100 text-white rounded-lg hover:bg-pimary-200'
              >
                수정완료
              </button>
            </div>
          </>
        ) : (
          <p className='my-100'>{post.data.content}</p>
        )}
      </div>

      <hr className='border-1 border-gray-300 w-full' />
    </div>
  );
}
