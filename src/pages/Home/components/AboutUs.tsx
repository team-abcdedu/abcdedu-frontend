import Handshake from '@/assets/images/handshake.webp';

import { schools } from '../constants';

import Achievements from './Achievements';

export default function AboutUs() {
  return (
    <div className='flex-col-center'>
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
          className='w-full max-w-[490px] h-auto px-45'
        />
      </div>
      <div
        className='w-full h-[900px] flex-col-center gap-48 max-w-[678] text-center 
        leading-[1.3] max-md:h-[1020px]'
      >
        <h2 className='text-center text-40 font-extrabold tracking-tight max-md:text-24 max-md:mb-70'>
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
    </div>
  );
}
