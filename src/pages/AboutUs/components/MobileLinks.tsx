import { Link } from 'react-router-dom';

export default function MobileLinks() {
  const linkStyle = 'leading-[1.3] w-120 px-16 py-8 border rounded-[20px]';
  const textStyle = 'block text-primary-400 font-semibold';
  return (
    <div className='text-center md:hidden'>
      <h3 className='font-bold text-26 sm:text-30 text-primary-400 mt-20 mb-30 tracking-[2px]'>
        More Info
      </h3>
      <div className='flex-row-center gap-20'>
        <Link className={linkStyle} to='gallery'>
          <span className={textStyle}>ABCDEdu</span>
          <span>갤러리</span>
        </Link>
        <Link className={linkStyle} to='history'>
          <span className={textStyle}>ABCDEdu</span>
          <span>히스토리</span>
        </Link>
      </div>
    </div>
  );
}
