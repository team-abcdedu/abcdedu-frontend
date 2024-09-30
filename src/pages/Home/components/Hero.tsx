import HeroImage from '@/assets/images/hero-img.svg?react';

import { reviews } from '../constants';

export default function Hero() {
  return (
    <div
      id='hero'
      className='bg-white min-h-[813px] flex flex-col leading-[1.4] 
      hero-gradient pt-135 lg:pb-40 pb-72'
    >
      <div className='lg:mb-24 mb-100'>
        <h1 className='text-center text-primary-400 leading-[1.4]'>
          <span
            className='block lg:text-60 sm:text-48 text-32 font-bold 
            font-HakgyoansimGaeulsopungB -mb-12'
          >
            <span className='text-orange'>중고등학생</span>을 위한
          </span>
          <br />
          <span className='lg:text-90 text-76 font-black max-sm:leading-[1.2] tracking-tight'>
            데이터 <br className='sm:hidden' /> 사이언스
          </span>
        </h1>
      </div>
      <div className='w-full max-w-[1215px] mx-auto'>
        <HeroImage className='hidden lg:block w-180 h-196 ml-32' />
      </div>
      <div className='flex-col-center lg:flex-row-center gap-30 lg:-mt-13'>
        {reviews.map(review => (
          <div
            key={review.keyword}
            className='relative max-w-[385px] min-h-220 rounded-[20px] bg-white 
            px-32 py-36 shadow-card-md max-xs:w-240'
          >
            <span
              className='absolute text-primary-400/60 font-HakgyoansimGaeulsopungB 
              text-26 top-12 right-18 max-xs:text-16'
            >
              {review.keyword}
            </span>
            <div className='font-semibold flex items-center gap-14 pt-4 pb-20'>
              <span className='text-20'>{review.school}</span>
              <span
                className='text-primary-400 text-12 block h-22 px-8 
              bg-primary-400/15 rounded-[10px] border-1 border-primary-400'
              >
                {review.grade}
              </span>
            </div>
            {/* <p
              className='text-neutral-300 [&>strong]:text-primary-400 
              [&>strong]:font-medium max-xs:text-11'
            >
              &quot;수업은 세 번이었지만 엄청 <strong>알찬 수업</strong>이라
              정말 큰 도움이 되었습니다.. 오늘 진로 시간에 AI에 관련된 책을
              읽었는데, 수업에서 다 배운 내용이라 <strong>쉽게 읽혀서</strong>{' '}
              내심 <strong>뿌듯하고 감사했어요!</strong>&quot;
            </p> */}
            <p
              className='text-neutral-300 [&>strong]:text-primary-400 
              [&>strong]:font-medium text-16 max-xs:text-11'
              dangerouslySetInnerHTML={{ __html: review.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
