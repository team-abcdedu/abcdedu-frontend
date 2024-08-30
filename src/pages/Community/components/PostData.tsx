import { DownloadSimple } from '@phosphor-icons/react';

import { PostTableProps, PostDetailsProps } from '../types/PostData';

export function PostTable({ posts, onSelectPost }: PostTableProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm sm:text-base'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='hidden md:table-cell px-20 py-10'>글쓴이</th>
            <th className='hidden md:table-cell px-20 py-10'>작성시간</th>
            <th className='hidden md:table-cell px-20 py-10'>조회수</th>
            <th className='hidden md:table-cell px-20 py-10'>댓글</th>
            <th className='hidden md:table-cell px-20 py-10'>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr
              key={post.id}
              className='space-x-5 border-b border-b-gray-400 cursor-pointer'
              onClick={() => onSelectPost(post)}
            >
              <td className='px-20 py-10'>{post.id}</td>
              <td className='px-20 py-10'>
                <p>{post.title}</p>
                <div className='block md:hidden text-xs text-gray-500'>
                  <p>
                    {post.author} | {post.timestamp}
                  </p>
                </div>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.author}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.timestamp}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>{post.views}</td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.comments}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PostDetails({ post }: PostDetailsProps) {
  if (!post) return null;

  return (
    <div className='text-left mt-10'>
      <hr className='border-1 border-black w-full' />

      <p className='flex flex-col sm:flex-row justify-between px-20 py-4 sm:py-10 bg-gray-100'>
        <h2 className='text-20 font-bold'>{post.title}</h2>
        <button>
          <p className='flex flex-row text-sm text-gray-500'>
            파일 다운받기
            <DownloadSimple size={17} />
          </p>
        </button>
      </p>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-row px-10 md:px-20 py-10 space-x-10'>
        <p className=' text-primary-400 text-sm'>{post.author}</p>
        <p className='text-gray-400 text-sm'>{`등록일: ${post.timestamp}`}</p>
        <p className='text-gray-400 text-sm'>{`조회수: ${post.views}`}</p>
      </div>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-col'>
        <p className='px-20 my-100'>{post.content}</p>
      </div>
      <hr className='border-1 border-gray-300 w-full' />
    </div>
  );
}
