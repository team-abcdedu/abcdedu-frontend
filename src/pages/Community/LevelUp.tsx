import { SortAscending } from '@phosphor-icons/react';
import React, { useState } from 'react';

import useModal from '@/hooks/useModal';
import { posts as initialPosts } from '@/mock/Community';

import { PostTable, PostDetails } from './components/TempData';
import WritePostModal from './components/WirtePostModal';
import { Post } from './types/TempData';

function LevelUp() {
  const { isVisible, toggleModal } = useModal();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filtered = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
  };

  return (
    <div className='flex flex-col text-center mt-20'>
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>등업 게시판</h3>
      </div>

      {selectedPost && (
        <PostDetails post={selectedPost} onClose={handleCloseDetails} />
      )}

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
      {isVisible && (
        <WritePostModal isVisible={isVisible} onClose={toggleModal} />
      )}
      <PostTable posts={filteredPosts} onSelectPost={handleSelectPost} />
    </div>
  );
}

export default LevelUp;
