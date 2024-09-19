import { DownloadSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { Post } from '@/types/community';

import usePostMutation from '../hooks/usePostMutation';

import MoreButton from './MoreButton';

interface PostSectionProps {
  id: number;
  post: Post;
  category: string;
  toggleEditModal: () => void;
}

export default function PostSection({
  id,
  post,
  category,
  toggleEditModal,
}: PostSectionProps) {
  const { deletePost } = usePostMutation({ category });

  const handleDelete = () => {
    const ok = window.confirm('게시글을 삭제하시겠습니까?');
    if (ok && post) {
      deletePost.mutate(id);
    }
  };

  return (
    <section>
      <hr className='border-1 border-black w-full' />
      <div
        className='flex flex-col sm:flex-row justify-between px-20 py-4 
        sm:py-10 bg-gray-100 relative'
      >
        <h2 className='text-20 font-bold h-30'>{post?.title}</h2>
      </div>
      <hr className='border-1 border-gray-300 w-full' />
      <div className='flex justify-between px-10 md:px-20 py-10 flex-wrap gap-y-6'>
        <div className='flex-row-center space-x-16 shrink-0'>
          <p
            className={`${post?.writer ? 'text-primary-400' : 'text-white'} 
            relative text-sm pipe-after`}
          >
            {post?.writer ?? '사용자'}
          </p>
          <p className='text-gray-400 relative text-sm pipe-after'>
            {post?.createdAt ? post?.createdAt.split('T')[0] : 'YYYY-MM-DD'}
          </p>
          <p className='text-gray-400 text-sm'>{`조회 ${post?.viewCount ?? 0}`}</p>
        </div>
        <div className='flex items-center gap-12 ml-auto'>
          {post?.fileUrl && (
            <Link to={post?.fileUrl}>
              <p className='flex-row-center gap-4 text-sm text-gray-500'>
                파일 다운받기
                <DownloadSimple className='mt-1 block' size={17} />
              </p>
            </Link>
          )}
          <MoreButton onEdit={toggleEditModal} onDelete={handleDelete} />
        </div>
      </div>
      <hr className='border-1 border-gray-300 w-full' />
      <p className='px-20 my-100'>{post?.content}</p>
      <hr className='border-1 border-gray-300 w-full' />
    </section>
  );
}
