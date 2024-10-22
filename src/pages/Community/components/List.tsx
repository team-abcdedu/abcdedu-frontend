import { Lock } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import Pagination from '@/components/Pagination';
import useBoundStore from '@/stores';
import { formatDate } from '@/utils/formatDate';

import useGetPosts from '../hooks/useGetPosts';

interface ListProps {
  page: number;
  boardId: number;
}

export default function List({ page, boardId }: ListProps) {
  const itemCountPerPage = 10;
  const user = useBoundStore(state => state.user);

  const { isLoading, list, totalElements } = useGetPosts({ boardId, page });

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
            {list.map((post, i) => (
              <tr
                key={post.postId}
                className='first:border-t border-b border-gray-400 hover:bg-gray-600/5'
              >
                <td className='max-md:hidden px-10 py-10 text-14 text-gray-500'>
                  <p>{totalElements - (page - 1) * itemCountPerPage - i}</p>
                </td>
                <td className='px-16 md:px-5 py-10 text-left md:w-[50%]'>
                  <Link to={`${post.postId}`}>
                    <div className='flex items-center gap-4'>
                      <p className='truncate'>
                        {post.secret && user?.email !== post.writerEmail
                          ? '비밀글입니다.'
                          : post.title}
                      </p>
                      {post.secret && (
                        <Lock
                          weight='fill'
                          className='text-neutral-300 shrink-0'
                        />
                      )}
                    </div>
                    <div className='block md:hidden text-xs text-gray-500 mt-4'>
                      <p>
                        {post.writer} | {post.createdAt.split('T')[0]} |
                        조회&nbsp;{post.viewCount} | 댓글&nbsp;
                        {post.commentCount}
                      </p>
                    </div>
                  </Link>
                </td>
                <td className='max-md:hidden px-5 py-10'>
                  <Link to={`${post.postId}`}>
                    <p className='md:truncate'>{post.writer}</p>
                  </Link>
                </td>
                <td className='max-md:hidden px-5 py-10 text-14 text-gray-500'>
                  <p>{formatDate(post.createdAt)}</p>
                </td>
                <td className='max-md:hidden px-5 py-10 text-14 text-gray-500'>
                  <p>{post.viewCount}</p>
                </td>
                <td className='max-md:hidden pr-10 pl-5 py-10 text-14 text-gray-500'>
                  <p>{post.commentCount}</p>
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
