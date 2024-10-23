import Badge from '@/assets/icons/badge-with-laurel.svg?react';
import ThumbsUp from '@/assets/icons/thumbs-up.svg?react';
import SNUImage from '@/assets/images/snu.png';

export default function Banner() {
  return (
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
        className='lg:w-fit md:w-180 max-md:w-115 h-auto'
        alt='snu-img'
      />
    </div>
  );
}
