import { Link } from 'react-router-dom';

function HeaderMenu() {
  const menuButtonStyle = 'min-w-218 min-h-40 w-auto text-15 px-12 rounded';
  const navItems = [
    {
      to: '/',
      text: '홈',
    },
    {
      to: '/about_us',
      text: '회사소개',
    },
    {
      to: '/classes',
      text: '클래스',
    },
    {
      to: '/community',
      text: '커뮤니티',
    },
    {
      to: '/contact',
      text: '문의',
    },
  ];

  return (
    <div className={'absolute bg-white right-16 rounded-md'}>
      <li className={`flex flex-col gap-8 px-16 py-8 my-12 bg-white`}>
        {navItems.map(item => {
          return (
            <Link
              key={item.to}
              to={item.to}
              className={
                'min-w-218 min-h-32 grid place-items-center text-15 px-12 hover:bg-slate-200'
              }
            >
              {item.text}
            </Link>
          );
        })}
        <button
          className={`${menuButtonStyle} border-1 border-blue-800 text-blue-800 hover:bg-slate-200`}
        >
          로그인
        </button>
        <button
          className={`${menuButtonStyle} bg-blue-800 text-white hover:opacity-80`}
        >
          회원가입
        </button>
      </li>
    </div>
  );
}

export default HeaderMenu;
