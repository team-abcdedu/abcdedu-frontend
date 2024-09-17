import { Link } from 'react-router-dom';

import { PostSummary } from '@/types/Community';

export interface PostTableProps {
  posts: PostSummary[];
  isLevelingUp?: boolean;
}

export default function List({ posts, isLevelingUp }: PostTableProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm sm:text-base'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            {isLevelingUp && <th className='px-20 py-10'>등업</th>}
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='hidden md:table-cell px-20 py-10'>글쓴이</th>
            <th className='hidden md:table-cell px-20 py-10'>작성시간</th>
            <th className='hidden md:table-cell px-20 py-10'>조회수</th>
            <th className='hidden md:table-cell px-20 py-10'>댓글</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr
              key={post.postId}
              className='space-x-5 border-b border-b-gray-400 cursor-pointer'
            >
              {isLevelingUp && (
                <td className='px-20 py-10'>
                  <input type='checkbox' />
                </td>
              )}
              <td className='px-20 py-10'>
                <Link to={`${post.postId}`}>{post.postId}</Link>
              </td>
              <td className='px-20 py-10'>
                <Link to={`${post.postId}`}>
                  <p>{post.title}</p>
                </Link>
                <div className='block md:hidden text-xs text-gray-500'>
                  <Link to={`${post.postId}`}>
                    <p>
                      {post.writer} | {post.updatedAt.split('T')[0]}
                    </p>
                  </Link>
                </div>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`${post.postId}`}>
                  <p>{post.writer}</p>
                </Link>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`${post.postId}`}>
                  <p>{post.updatedAt.split('T')[0]}</p>
                </Link>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`${post.postId}`}>
                  <p>{post.viewCount}</p>
                </Link>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                <Link to={`${post.postId}`}>
                  <p>{post.commentCount}</p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
