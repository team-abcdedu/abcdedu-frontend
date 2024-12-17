import { Lock } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import useBoundStore from '@/stores';
import { AdjacentPost } from '@/types/community';

interface PostNavLinkProps {
  type: '이전' | '다음';
  category: string;
  postInfo: AdjacentPost;
}

function PostNavLink({ type, category, postInfo }: PostNavLinkProps) {
  const user = useBoundStore(state => state.user);
  const isSecretPost = postInfo.secret && user?.email !== postInfo.writerEmail;
  const postTitle = isSecretPost ? '비밀글입니다.' : postInfo?.title;

  return (
    <div className={'w-full flex items-center gap-20 px-20'}>
      <div
        className={'min-w-fit max-w-full font-semibold text-sm text-gray-500'}
      >{`${type}글`}</div>
      <Link
        to={`/community/${category}/${postInfo.id}`}
        className={'w-full flex items-center gap-5 text-black truncate'}
      >
        {postTitle}
        {isSecretPost && <Lock weight={'fill'} className={'shrink-30'} />}
      </Link>
    </div>
  );
}

interface PostNavigationProps {
  category: string;
  prevPost: AdjacentPost | null;
  nextPost: AdjacentPost | null;
}

function PostNavigation({ category, prevPost, nextPost }: PostNavigationProps) {
  return (
    <div className={'flex flex-col gap-10 mt-60'}>
      <hr className='border-1 border-gray-300 w-full mt-20' />
      {nextPost && (
        <PostNavLink type={'다음'} category={category} postInfo={nextPost} />
      )}
      {prevPost && (
        <PostNavLink type={'이전'} category={category} postInfo={prevPost} />
      )}
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
