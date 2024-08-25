import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { CommunityInfo } from '@/types/communityTypes';

function ClassContents({ communityInfo }: { communityInfo: CommunityInfo }) {
  return (
    <div
      className={
        'flex flex-col p-30 border-2 border-white rounded-[20px] w-full min-h-[100px]'
      }
    >
      <h3 className={'text-30 text-white font-semibold'}>
        {communityInfo.label}
      </h3>
      <p className={'text-20 text-white mt-5 mb-20'}>
        {communityInfo.description}
      </p>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 grid-flow-row lg:flex lg:flex-row gap-20`}
      >
        {communityInfo.communities.map(community => {
          return (
            <div
              key={community.code}
              className={
                'flex flex-col justify-between items-center sm:justify-start sm:items-start grow basis-0 min-w-[50px] min-h-[60px] p-15 bg-white rounded-[20px] leading-[1.4]'
              }
            >
              <h5 className={'text-20 font-semibold text-primary-300'}>
                {community.code}
              </h5>
              <h5
                className={'text-20 h-full font-semibold whitespace-pre-wrap'}
              >
                {community.title}
              </h5>
              <Link
                to={'/classes'}
                className={'flex items-center pt-10 self-end'}
              >
                <span className={'text-15 underline'}>바로가기</span>
                <ArrowRight size={15} weight='bold' />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClassContents;
