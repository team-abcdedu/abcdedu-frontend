import { Link } from 'react-router-dom';

function AccessError({ errorCode }: { errorCode: number }) {
  return (
    <div className='flex-col-center h-[500px] gap-10 py-120'>
      <p className='text-center'>
        {errorCode === 401 && '로그인 후 과제를 열람할 수 있습니다.'}
        {errorCode === 403 && '학생 등급 이상만 과제를 열람할 수 있습니다.'}
      </p>
      <Link
        to={'/'}
        className='px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
      >
        홈으로
      </Link>
    </div>
  );
}

export default AccessError;
