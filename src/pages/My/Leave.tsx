import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Head from '@/components/Head';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';

import LeaveModal from './components/LeaveModal';

export default function Leave() {
  const user = useBoundStore(state => state.user);
  const [isAgreed, setIsAgreed] = useState(false);

  const { isVisible: isLeaveModalVisible, toggleModal: toggleLeaveModal } =
    useModal();

  if (!user) return <Navigate to='/' replace />;

  return (
    <div className='w-full max-w-screen-sm m-auto px-24 py-60'>
      <Head title='회원 탈퇴 | ABCDEdu' />
      <h2 className='text-28 font-semibold mb-4'>회원 탈퇴</h2>
      <p className='text-neutral-500'>
        탈퇴하시기 전 안내 사항을 꼭 확인해 주세요.
      </p>
      <ul className='flex flex-col gap-16 py-50 list-disc pl-16'>
        <li>
          사용하고 계신 이메일(
          <strong className='text-primary-400 font-semibold'>
            {user.email}
          </strong>
          )은 탈퇴할 경우 재가입 및 복구가 불가능합니다.
        </li>
        <li>
          탈퇴 후에도 작성한 게시물과 댓글은 그대로 남아 있습니다. (작성자 익명
          처리)
        </li>
      </ul>
      <div className='flex items-center gap-4 mb-60'>
        <input
          id='agree'
          type='checkbox'
          checked={isAgreed}
          onChange={() => setIsAgreed(prev => !prev)}
        />
        <label htmlFor='agree' className='cursor-pointer'>
          안내 사항을 모두 확인하였으며, 이에 동의합니다.
        </label>
      </div>
      <button
        className='block w-100 m-auto px-16 py-8 rounded-full 
      bg-primary-400 text-white font-semibold disabled:bg-primary-400/15'
        disabled={!isAgreed}
        onClick={toggleLeaveModal}
      >
        탈퇴하기
      </button>
      <LeaveModal isVisible={isLeaveModalVisible} onClose={toggleLeaveModal} />
    </div>
  );
}
