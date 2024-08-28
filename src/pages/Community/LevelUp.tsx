import { SortAscending } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import useModal from '@/hooks/useModal';
import { posts } from '@/mock/Community';

import WritePostModal from './components/WirtePostModal'; // 경로에 맞게 수정

// 차후 백에서 데이터 받아오기
const PostTable: React.FC = ({ onSelectPost }) => {
  return (
    <table className='py-10 px-20'>
      <thead>
        <tr className='border-t-2 border-t border-t-gray-400 border-b-2 border-b border-b-primary-400'>
          <th className='px-20 py-10'>No.</th>
          <th className='px-20 py-10'>제목</th>
          <th className='px-20 py-10'>글쓴이</th>
          <th className='px-20 py-10'>작성시간</th>
          <th className='px-20 py-10'>조회수</th>
          <th className='px-20 py-10'>댓글</th>
          <th className='px-20 py-10'>좋아요</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr
            key={post.id}
            className='space-x-5 border-b-1 border-b border-b-gray-400'
            onClick={() => onSelectPost(post)}
          >
            {/* <div className='flex flex-row py-10'> */}
            <td className='px-20 py-10'>{post.id}</td>
            <td className='px-20 py-10'>{post.title}</td>
            <td className='px-20 py-10'>{post.author}</td>
            <td className='px-20 py-10'>{post.timestamp}</td>
            <td className='px-20 py-10'>{post.views}</td>
            <td className='px-20 py-10'>{post.comments}</td>
            <td className='px-20 py-10'>{post.likes}</td>
            {/* </div> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// PropTypes를 PostTable에 추가
PostTable.propTypes = {
  onSelectPost: PropTypes.func.isRequired,
};

const PostDetails = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className='p-10 border border-gray-300 rounded-lg mt-10'>
      <h2 className='text-20 font-bold'>{post.title}</h2>
      <p className='text-gray-500'>{`글쓴이: ${post.author}`}</p>
      <p className='text-gray-500'>{`작성시간: ${post.timestamp}`}</p>
      <p className='mt-10'>{post.content}</p>{' '}
      {/* Assume post has a content field */}
      <button
        onClick={onClose}
        className='mt-10 py-5 px-10 bg-gray-200 rounded'
      >
        닫기
      </button>
    </div>
  );
};

// PropTypes를 PostDetails에 추가
PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

function LevelUp() {
  const { isVisible, toggleModal } = useModal();
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = post => {
    setSelectedPost(post);
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

      {/* 이 사이에 글 누르면 상세페이지 */}
      {selectedPost && (
        <PostDetails post={selectedPost} onClose={handleCloseDetails} />
      )}

      <div className='flex flex-row justify-between px-20 py-10'>
        <div className='flex items-center flex-grow'>
          <button>
            <SortAscending size={32} className='text-gray-400' />
          </button>
          <input
            type='text'
            placeholder='제목으로 게시물 검색하기'
            className='border-3 rounded-lg p-6 pr-50'
          />
        </div>
        <button
          onClick={toggleModal}
          className='py-8 px-50 rounded-3xl bg-primary-400 text-white hover:opacity-80`'
        >
          글쓰기
        </button>

        {/* WritePostModal 렌더링 */}
        {isVisible && (
          <WritePostModal isVisible={isVisible} onClose={toggleModal} />
        )}
      </div>
      <PostTable onSelectPost={handleSelectPost} />
    </div>
  );
}

export default LevelUp;
