import { SortAscending } from '@phosphor-icons/react';
import React, { useState } from 'react';

import useModal from '@/hooks/useModal';
import { posts as initialPosts } from '@/mock/Community';

import { PostTable } from './components/PostData';
import WritePostModal from './components/WirtePostModal';
import { Post } from './types/PostData';

function LevelUp() {
  const { isVisible, toggleModal } = useModal();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [isLevelingUp, setIsLevelingUp] = useState<boolean>(false); // 등업하기 상태
  const [userRole, setUserRole] = useState<string>(''); 

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filtered = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  };

  const handleLevelUpClick = () => {
    setIsLevelingUp(true); // 등업하기 버튼을 누르면 등업하기 상태로 전환
  };

  const handleCancelOrComplete = () => {
    window.location.reload(); // 취소 혹은 완료 시 페이지 새로고침
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserRole(e.target.value); // 셀렉트 박스에서 역할 선택 시 상태 변경
  };


  return (
    <div className='flex flex-col text-center mt-20'>
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>등업 게시판</h3>
      </div>

      <div className='flex flex-row w-full justify-between px-20 py-10'>
        <div className='flex items-center flex-grow'>
          <button>
            <SortAscending size={32} className='text-gray-400' />
          </button>
          <input
            type='text'
            placeholder='제목으로 게시물 검색하기'
            className='border-3 rounded-lg pr-2 md:p-6 md:pr-50'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <button
          onClick={toggleModal}
          className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
        >
          글쓰기
        </button>
      </div>
      {/* isLevelingUp이 true면 셀렉트 박스로 관리자 학생을 선택 */}
      {isLevelingUp ? (
        <div className='flex justify-start mb-10 ml-20'>
          <select
            value={userRole}
            onChange={handleRoleChange}
            className='border-2 rounded-lg p-2'
          >
            <option value='' disabled>
              등급 변경
            </option>
            <option value='관리자'>관리자</option>
            <option value='학생'>학생</option>
          </select>
        </div>
      ) : null}
      
      {isVisible && (
        <WritePostModal isVisible={isVisible} onClose={toggleModal} />
      )}
      <PostTable posts={filteredPosts} isLevelingUp={isLevelingUp} />

      <div className='mt-10 flex justify-end pr-30'>
        {/* 차후 관리자 계정인지 판별하는 로직 보충 */}
        {!isLevelingUp ? (
          <button
            onClick={handleLevelUpClick}
            className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
          >
            등업하기
          </button>
        ) : (
          <div className='flex flex-row space-x-4'>
            <button
              onClick={handleCancelOrComplete}
              className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-gray-400 text-white hover:opacity-80'
            >
              취소
            </button>
            <button
              onClick={handleCancelOrComplete}
              className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
            >
              완료
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LevelUp;
