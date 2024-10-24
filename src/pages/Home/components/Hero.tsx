import HeroImage from '@/assets/images/hero-img.svg?react';

import Reviews from './Reviews';

export default function Hero() {
  return (
    <div
      id='hero'
      className='bg-white min-h-[813px] flex flex-col leading-[1.4] 
      hero-gradient pt-135 lg:pb-70 pb-72'
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
      <Reviews />
    </div>
  );
}
