interface HeaderButtonsProps {
  mobile: boolean;
}

function HeaderButtons(props: HeaderButtonsProps) {
  const { mobile } = props;

  const headerBtnStyle = mobile
    ? 'min-w-218 min-h-40 w-auto text-15 px-12 rounded'
    : 'px-24 min-h-40 max-h-46 grid place-items-center rounded-md';

  return (
    <>
      <button
        className={`${headerBtnStyle} border-1 border-blue-800 text-blue-800 hover:bg-primary-50`}
      >
        로그인
      </button>
      <button
        className={`${headerBtnStyle} bg-blue-800 text-white hover:opacity-80`}
      >
        회원가입
      </button>
    </>
  );
}

export default HeaderButtons;
