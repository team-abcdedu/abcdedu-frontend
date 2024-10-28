import { UserInfo } from '@/types/user';

export default function ProfileInfo({ user }: { user: UserInfo }) {
  const bgColor = !user.imageUrl && 'bg-primary-300/5';

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex items-center gap-16'>
        <div
          className={`w-58 h-58 rounded-full overflow-hidden border-1 ${bgColor}`}
        >
          {user.imageUrl && (
            <img
              src={user.imageUrl}
              alt='profile-img'
              className='w-full h-full object-cover'
            />
          )}
        </div>
        <div className='flex-row-center'>
          <span className='text-primary-400 text-25 font-bold leading-[1.4]'>
            {user.name}
          </span>
          <span className='font-semibold'>&nbsp;님, 안녕하세요!</span>
        </div>
      </div>
      <span
        className='text-neutral-500 underline decoration-1 
        underline-offset-2 -mt-4 text-14'
      >
        계정 생성 일자: {user.createdAt.split('T')[0]}
      </span>
      <div className='[&_strong]:font-semibold [&>p]:pb-6'>
        <p>
          <strong>회원 등급:</strong> &nbsp;{user.role}
        </p>
        <p>
          <strong>소속 학교:</strong> &nbsp;{user.school}
        </p>
        <p>
          <strong>학번:</strong> &nbsp;{user.studentId}
        </p>
        <p>
          <strong>Email:</strong> &nbsp;{user.email}
        </p>
        <p>
          <strong>작성한 게시물 수:</strong> &nbsp;{user.createPostCount}
        </p>
        <p>
          <strong>작성한 댓글 수: </strong>&nbsp;{user.createCommentCount}
        </p>
      </div>
    </div>
  );
}
