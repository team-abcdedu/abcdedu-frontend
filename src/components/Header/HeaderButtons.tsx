import UserLogin from '@/assets/user-login.svg?react';

function HeaderButtons() {
  const btnStyle =
    'w-[100px] h-[36px] px-20 py-4 flex-row-center rounded-[20px] text-14';

  return (
    <div className={'flex flex-col items-center sm:flex-row gap-10'}>
      <button
        className={
          'hidden sm:flex w-[100px] h-[36px] text-14 items-center gap-4'
        }
      >
        <UserLogin className={'w-30 h-30'} />
        <div
          className={
            'w-[64px] h-[36px] flex-row-center text-14 font-semibold text-primary-400'
          }
        >
          로그인
        </div>
      </button>
      <button className={`block sm:hidden ${btnStyle} btn-white-pb`}>
        로그인
      </button>
      <button className={`${btnStyle} bg-primary-400 text-white`}>
        회원가입
      </button>
    </div>
  );
}

export default HeaderButtons;
