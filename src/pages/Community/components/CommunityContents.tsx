import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { communityInfoMap } from '@/pages/Community/constants/communityInfo';

function CommunityContents() {
  return (
    <div className='flex flex-row px-50 gap-20'>
      {Object.keys(communityInfoMap).map(key => {
        const communityInfo = communityInfoMap[key];
        return (
          <div
            key={key}
            className='flex-1 p-[15px] text-left bg-white rounded-[20px] shadow-[2px_2px_4px_0px_rgb(170,170,170)]'
          >
            <div
              className={
                'flex flex-col border-2 border-white rounded-[20px] w-full'
              }
            >
              <h3 className={'text-20 text-primary-300 font-semibold'}>
                {communityInfo.label}
              </h3>
              <div className=' text-gray-500'>_______________________</div>
              <h5 className={'mt-10 text-18 text-gray-500 font-bold mb-20'}>
                {communityInfo.description}
              </h5>
              <Link
                to={communityInfo.to}
                className={'flex items-center pt-10 self-end'}
              >
                <span className={'text-15 underline text-gray-500 font-bold'}>
                  바로가기
                </span>
                <ArrowRight className='h-15 w-15 font-bold m-5' />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommunityContents;
