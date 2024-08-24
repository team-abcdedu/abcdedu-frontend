import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div
      id='hero'
      className='bg-primary-300 h-[600px] flex-col-center gap-32 leading-[1.3]'
    >
      <div className='flex-col-center gap-12'>
        <p className='font-bold text-20 max-xs:text-17 text-neutral-200 whitespace-pre-wrap px-8'>
          중고등학생을 위한 데이터 사이언스 교육 서비스
        </p>
        <h1 className='font-bold text-80 max-400:text-64 text-white'>
          ABCDEdu
        </h1>
      </div>
      <Link
        to='/about_us'
        className='h-48 px-16 py-8 flex-row-center rounded-[20px] btn-white-wb shadow-btn-primary'
      >
        <span className='text-15 leading-normal font-semibold'>
          ABCDEdu에 대해 더 알아보기
        </span>
      </Link>
    </div>
  );
}
