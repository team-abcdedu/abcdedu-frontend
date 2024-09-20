import useLevelUpMutation from '../hooks/useLevelUpMutation';

export default function LevelUpButton({ postId }: { postId: number }) {
  const mutation = useLevelUpMutation();

  const handleClick = () => {
    const ok = window.confirm('해당 멤버를 등업시키겠습니까?');
    if (ok) mutation.mutate(postId);
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
