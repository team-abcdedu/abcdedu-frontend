import { SortAscending } from '@phosphor-icons/react';

// import Modal from '@/components/Modal';
// import { useState } from 'react';
import { posts } from '@/mock/Community';

const PostTable: React.FC = () => {
  return (
    <table className='post-table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성시간</th>
          <th>조회수</th>
          <th>댓글</th>
          <th>좋아요</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.timestamp}</td>
            <td>{post.views}</td>
            <td>{post.comments}</td>
            <td>{post.likes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function LevelUp() {
  return (
    <div className='flex flex-col text-center mt-20'>
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>등업 게시판</h3>
      </div>

      <div className='flex flex-row justify-between px-20 py-10'>
        <div className='flex items-center'>
          <button>
            <SortAscending size={32} className='text-gray-400' />
          </button>
          <input
            type='text'
            placeholder='제목으로 게시물 검색하기'
            className='border-3 rounded-lg p-6 pr-50'
          />
        </div>
        <button className='py-8 px-50 rounded-3xl bg-primary-300 text-white hover:opacity-80`'>
          글쓰기
        </button>
      </div>
      <PostTable />
    </div>
  );
}

export default LevelUp;
