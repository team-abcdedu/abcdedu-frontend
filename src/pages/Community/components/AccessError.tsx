import { useNavigate } from 'react-router-dom';

export default function AccessError({ errorCode }: { errorCode: 401 | 403 }) {
  const navigate = useNavigate();

  return (
    <div className='flex-col-center h-[500px] gap-10 py-120'>
      <p className='text-center'>
        {errorCode === 403 && '비밀글은 작성자와 관리자만 열람할 수 있습니다.'}
        {errorCode === 401 && '로그인 후 게시글을 열람할 수 있습니다.'}
      </p>
      <button
        onClick={() => navigate(-1)}
        className='px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
      >
        뒤로가기
      </button>
    </div>
  );
}
