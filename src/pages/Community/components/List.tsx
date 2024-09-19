import { Link } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import { PostSummary } from '@/types/community';

interface ListProps {
  isLoading: boolean;
  page: number;
  posts: PostSummary[];
  totalElements: number;
}

export default function List({
  isLoading,
  page,
  posts,
  totalElements,
}: ListProps) {
  const itemCountPerPage = 10;

  return (
    <>
      <div className='overflow-x-auto min-h-[300px]'>
        <table className='w-full text-sm sm:text-base'>
          <thead>
            <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
              <th className='px-20 py-10'>No.</th>
              <th className='px-20 py-10'>제목</th>
              <th className='hidden md:table-cell px-20 py-10'>글쓴이</th>
              <th className='hidden md:table-cell px-20 py-10'>작성시간</th>
              <th className='hidden md:table-cell px-20 py-10'>조회수</th>
              <th className='hidden md:table-cell px-20 py-10'>댓글</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && totalElements === 0 && (
              <tr>
                <td colSpan={6} className='text-center py-120'>
                  작성된 글이 없습니다.
                </td>
              </tr>
            )}
            {posts.map((post, i) => (
              <tr
                key={post.postId}
                className='space-x-5 border-b border-b-gray-400 cursor-pointer'
              >
                <td className='px-20 py-10'>
                  <Link to={`${post.postId}`}>
                    {totalElements - (page - 1) * itemCountPerPage - i}
                  </Link>
                </td>
                <td className='px-20 py-10 text-left'>
                  <Link to={`${post.postId}`}>
                    <p>{post.secret ? '비밀글입니다.' : post.title}</p>
                  </Link>
                  <div className='block md:hidden text-xs text-gray-500'>
                    <Link to={`${post.postId}`}>
                      <p>
                        {post.writer} | {post.createdAt.split('T')[0]}
                      </p>
                    </Link>
                  </div>
                </td>
                <td className='px-20 py-10'>
                  <Link to={`${post.postId}`}>
                    <p>{post.writer}</p>
                  </Link>
                </td>
                <td className='px-20 py-10'>
                  <Link to={`${post.postId}`}>
                    <p>{post.createdAt.split('T')[0]}</p>
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
      <Pagination currentPage={page} totalElements={totalElements} />
    </>
  );
}
