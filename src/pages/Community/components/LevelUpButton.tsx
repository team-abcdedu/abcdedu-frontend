export default function LevelUpButton() {
  const handleClick = () => {
    const ok = window.confirm('해당 멤버를 등업시키겠습니까?');
    if (ok) {
      // API 요청
      alert('등업이 완료되었습니다.');
    }
  };

  return (
    <button
      type='button'
      className='block bg-primary-400 py-8 px-16 rounded-[20px] 
      text-14 text-white my-8 ml-auto mr-16'
      onClick={handleClick}
    >
      등업시키기
    </button>
  );
}
