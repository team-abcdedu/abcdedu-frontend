import { Lock } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import useBoundStore from '@/stores';
import { PostLinkData } from '@/types/community';

interface PostNavLinkProps {
  type: '이전' | '다음';
  category: string;
  postLink: PostLinkData | null;
}

function PostNavLink({ type, category, postLink }: PostNavLinkProps) {
  const user = useBoundStore(state => state.user);
  const isSecretPost = postLink?.secret && user?.email !== postLink.writerEmail;
  const postTitle = isSecretPost ? '비밀글입니다.' : postLink?.title;

  return (
    <div className={'w-full flex items-center gap-20 px-20'}>
      <div
        className={'min-w-fit max-w-full font-semibold text-sm text-black'}
      >{`${type}글`}</div>
      {postLink ? (
        <Link
          to={`/community/${category}/${postLink.id}`}
          className={'w-full flex items-center gap-5 text-primary-100 truncate'}
        >
          {postTitle}
          {isSecretPost && <Lock weight={'fill'} className={'shrink-30'} />}
        </Link>
      ) : (
        <div className={'text-gray-500'}>{`${type} 게시글이 없습니다.`}</div>
      )}
    </div>
  );
}

interface PostNavigationProps {
  category: string;
  prevPost: PostLinkData | null;
  nextPost: PostLinkData | null;
}

function PostNavigation({ category, prevPost, nextPost }: PostNavigationProps) {
  return (
    <div className={'flex flex-col gap-10'}>
      <hr className='border-1 border-gray-300 w-full mt-20' />
      <PostNavLink type={'다음'} category={category} postLink={nextPost} />
      <PostNavLink type={'이전'} category={category} postLink={prevPost} />
      <hr className='border-1 border-gray-300 w-full' />
      <div className={'w-full flex-row-center mt-10'}>
        <Link
          to={`/community/${category}`}
          className={'px-40 py-10 bg-primary-75 text-white rounded-md'}
        >
          목록으로
        </Link>
      </div>
    </div>
  );
}

export default PostNavigation;
