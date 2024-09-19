import { Link } from 'react-router-dom';

import logo from '@/assets/icons/logo.png';
import Head from '@/components/Head';

export default function NotFound() {
  return (
    <div className='w-full h-[100dvh] flex-col-center gap-16'>
      <Head title='존재하지 않는 페이지 | ABCDEdu' />
      <div className='flex-row-center gap-8 mb-16'>
        <img src={logo} alt={'logo'} className={'w-30 h-fit'} />
        <h1
          className={
            'text-32 font-bold bg-gradient-to-r from-primary-400 via-primary-400 to-sky-600 text-transparent bg-clip-text'
          }
        >
          ABCDEdu
        </h1>
      </div>
      <p className='text-18'>페이지를 찾을 수 없습니다.</p>
      <Link
        to='/'
        className='px-16 py-6 rounded-[20px] bg-primary-400 text-white'
      >
        홈으로
      </Link>
    </div>
  );
}
