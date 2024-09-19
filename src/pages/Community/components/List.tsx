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
      <div className='min-h-[300px]'>
        <table className='w-full table-fixed text-sm sm:text-base'>
          <thead className='max-md:hidden'>
            <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
              <th className='w-[7%] min-w-75 px-10 py-10'>No.</th>
              <th className='w-[50%] px-5 py-10'>제목</th>
              <th className='w-[10%] px-5 py-10'>글쓴이</th>
              <th className='w-[12%] min-w-100 px-5 py-10'>작성일</th>
              <th className='w-[7%] min-w-85 px-5 py-10'>조회</th>
              <th className='w-[7%] min-w-85 pr-10 pl-5 py-10'>댓글</th>
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
                className='first:border-t border-b border-gray-400 cursor-pointer'
              >
                <td className='max-md:hidden px-10 py-10 text-14'>
                  <Link to={`${post.postId}`}>
                    <p>{totalElements - (page - 1) * itemCountPerPage - i}</p>
                  </Link>
                </td>
                <td className='px-16 md:px-5 py-10 text-left md:w-[50%]'>
                  <Link to={`${post.postId}`}>
                    <p>{post.secret ? '비밀글입니다.' : post.title}</p>
                  </Link>
                  <div className='block md:hidden text-xs text-gray-500 mt-4'>
                    <Link to={`${post.postId}`}>
                      <p>
                        {post.writer} | {post.createdAt.split('T')[0]} |
                        조회&nbsp;{post.viewCount} | 댓글&nbsp;
                        {post.commentCount}
                      </p>
                    </Link>
                  </div>
                </td>
                <td className='max-md:hidden px-5 py-10'>
                  <Link to={`${post.postId}`}>
                    <p className='md:truncate'>{post.writer}</p>
                  </Link>
                </td>
                <td className='max-md:hidden px-5 py-10 text-14'>
                  <Link to={`${post.postId}`}>
                    <p>{post.createdAt.split('T')[0]}</p>
                  </Link>
                </td>
                <td className='max-md:hidden px-5 py-10 text-14'>
                  <Link to={`${post.postId}`}>
                    <p>{post.viewCount}</p>
                  </Link>
                </td>
                <td className='max-md:hidden pr-10 pl-5 py-10 text-14'>
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
