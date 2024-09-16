import { SortAscending } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

import useModal from '@/hooks/useModal';
// import { posts as initialPosts } from '@/mock/Community';
import { get } from '@/libs/api';

import { PostTable } from './components/2PostData';
import WritePostModal from './components/2WriteModal';
import { Post } from './types/PostData';

function Board() {
  const { isVisible, toggleModal } = useModal();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]); // 전체 게시물 상태
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  // 검색어가 변경될 때마다 필터링된 게시물 업데이트
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredPosts(posts); // 검색어가 없으면 전체 게시물 표시
    } else {
      const filtered = posts.filter(post =>
        post.data.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  // 게시판 데이터를 가져오는 useEffect
  useEffect(() => {
    const url = `/boards/1`;
    console.log('Request URL:', url);

    get<Post[]>(url)
      .then(res => {
        setPosts(res); // 전체 게시물을 설정
        setFilteredPosts(res); // 필터링된 게시물도 초기에는 전체 게시물로 설정
        console.log('자유 게시판: ', res);
      })
      .catch(err => {
        console.log('error:', err);
      });
  }, []); // 페이지 상태 의존성 배열에 필요시 추가

  return (
    <div className='flex flex-col text-center mt-20'>
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>자유게시판</h3>
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
            // onKeyDown={handleSearch}
          />
        </div>
        <button
          onClick={toggleModal}
          className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
        >
          글쓰기
        </button>
      </div>
      {isVisible && (
        <WritePostModal
          isVisible={isVisible}
          onClose={toggleModal}
          boardId={1}
        />
      )}
      <PostTable posts={filteredPosts} />
    </div>
  );
}

export default Board;
