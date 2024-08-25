import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { communityInfoMap } from '@/pages/Community/constants/communityInfo';

function test() {
  return (
    <div>
      {Object.keys(communityInfoMap).map(key => {
        const communityInfo = communityInfoMap[key];
        return (
          <div key={key} className='community-item'>
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
              <Link
                to={communityInfo.to}
                className={'flex items-center pt-10 self-end'}
              >
                <span className={'text-15 underline'}>바로가기</span>
                <ArrowRight size={15} weight='bold' />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default test;
