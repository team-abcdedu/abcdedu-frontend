import { Link, useNavigate } from 'react-router-dom';

import { isEndWithConsonant } from '@/utils/isEndWithConsonant';

interface AccessErrorProps {
  type: string;
  errorCode: number;
  linkUrl?: string;
  linkString?: string;
  isPrevPageDirection?: boolean;
}

export default function AccessError({
  type,
  errorCode,
  linkUrl,
  linkString,
  isPrevPageDirection = false,
}: AccessErrorProps) {
  const navigate = useNavigate();
  const linkStyle =
    'px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white';

  return (
    <div className='flex-col-center h-[500px] gap-10 py-120'>
      <p className='text-center'>
        {errorCode === 401 &&
          `로그인 후 ${type}${isEndWithConsonant(type) ? '을' : '를'} 열람할 수 있습니다.`}
        {errorCode === 403 &&
          `학생 등급 이상만 ${type}${isEndWithConsonant(type) ? '을' : '를'} 열람할 수 있습니다.`}
      </p>
      {linkUrl && linkString && (
        <Link to={linkUrl} className={linkStyle}>
          {linkString}
        </Link>
      )}
      {isPrevPageDirection && (
        <button onClick={() => navigate(-1)} className={linkStyle}>
          뒤로가기
        </button>
      )}
    </div>
  );
}
