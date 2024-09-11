// import { Link } from 'react-router-dom';

// import ArrowRightOutline from '@/assets/icons/arrow-right-outline.svg?react';
import Badge from '@/assets/icons/badge-with-laurel.svg?react';
import ThumbsUp from '@/assets/icons/thumbs-up.svg?react';
import Handshake from '@/assets/images/handshake.png';
import SNUImage from '@/assets/images/snu.png';

import { schools } from '../constants';

import Achievements from './Achievements';

export default function AboutUs() {
  return (
    <section className='flex-col-center'>
      <div
        className='w-full lg:h-225 md:h-158 h-90 flex-row-center 
        lg:gap-80 md:gap-40 bg-[#030365] gap-10 px-10'
      >
        <div className='flex-row-center lg:gap-20 gap-8'>
          <Badge className='lg:w-fit md:w-48 max-md:w-32' />
          <div className='flex flex-col text-white font-medium'>
            <span className='lg:text-30 md:text-18 text-12'>국내 최초</span>
            <span className='lg:text-16 md:text-10 text-6 opacity-70'>
              중고등학생 대상 데이터 사이언스 교육 서비스
            </span>
          </div>
        </div>
        <div className='flex-row-center lg:gap-24 md:gap-15 gap-9'>
          <ThumbsUp className='lg:w-fit md:w-24 max-md:w-17' />
          <div className='flex-col-center text-white'>
            <span className='lg:text-24 md:text-15 text-10 text-white/70'>
              <strong className='lg:text-38 md:text-24 text-15 text-white'>
                4.5
              </strong>
              /5.0
            </span>
            <span
              className='text-white/70 lg:-mt-[0.5rem] md:-mt-[0.3rem] 
              -mt-[0.1rem] lg:text-16 md:text-10 max-md:text-6'
            >
              학생 만족도
            </span>
          </div>
        </div>
        <img
          src={SNUImage}
          className='lg:w-fit md:w-180 max-md:w-115'
          alt='snu-img'
        />
      </div>
      <div className='w-full sm:h-[900px] h-[528px] flex-col-center sm:gap-60 gap-40 '>
        <h2 className='text-40 text-center font-extrabold leading-[1.3] tracking-tight max-sm:text-28'>
          60+ 학교가 선택한 <br /> 신뢰받는 국내 최고 커리큘럼
        </h2>
        <p
          className='w-full max-w-[1193px] text-center px-2 sm:text-15 text-9 bg-gradient-to-r 
        from-[#bbb] via-[#6e6e6e] to-[#bbb] bg-clip-text text-transparent 
          tracking-[0.11em] break-keep'
        >
          {schools}
        </p>
        <img
          src={Handshake}
          alt='handshake-img'
          className='w-full max-w-[490px] px-45'
        />
      </div>
      <div
        className='w-full h-[900px] flex-col-center gap-48 max-w-[678] text-center 
        leading-[1.3] max-md:h-[1060px]'
      >
        <h2 className='text-center text-40 font-extrabold tracking-tight max-md:text-24'>
          고교학점제 시대, <br className='md:hidden' />
          중고등학생들을 위한 <br />
          데이터 사이언스 교육의 선두 주자!
        </h2>
        <Achievements />
        {/* 추후 개발 */}
        {/* <Link
          to='/'
          className='w-300 h-66 text-18 rounded-[20px] border-2 border-neutral-200 
          font-semibold flex-row-center gap-14'
        >
          서비스 더 알아보기 <ArrowRightOutline />
        </Link> */}
      </div>
    </section>
  );
}
