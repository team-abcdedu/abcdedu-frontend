import { SortAscending, DownloadSimple } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import useModal from '@/hooks/useModal';
import { posts } from '@/mock/Community';

import WritePostModal from './components/WirtePostModal'; // 경로에 맞게 수정

const PostTable = ({ onSelectPost }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm sm:text-base'>
        <thead>
          <tr className='border-t-2 border-t-gray-400 border-b-2 border-b-primary-400'>
            <th className='px-20 py-10'>No.</th>
            <th className='px-20 py-10'>제목</th>
            <th className='hidden md:table-cell px-20 py-10'>글쓴이</th>
            <th className='hidden md:table-cell px-20 py-10'>작성시간</th>
            <th className='hidden md:table-cell px-20 py-10'>조회수</th>
            <th className='hidden md:table-cell px-20 py-10'>댓글</th>
            <th className='hidden md:table-cell px-20 py-10'>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr
              key={post.id}
              className='space-x-5 border-b border-b-gray-400 cursor-pointer'
              onClick={() => onSelectPost(post)}
            >
              <td className='px-20 py-10'>{post.id}</td>
              <td className='px-20 py-10'>
                <p>{post.title}</p>
                <div className='block md:hidden text-xs  text-gray-500'>
                  <p>
                    {post.author} | {post.timestamp}
                  </p>
                </div>
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.author}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.timestamp}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>{post.views}</td>
              <td className='hidden md:table-cell px-20 py-10'>
                {post.comments}
              </td>
              <td className='hidden md:table-cell px-20 py-10'>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PostTable.propTypes = {
  onSelectPost: PropTypes.func.isRequired,
};

// 상세 글 보기
const PostDetails = ({ post }) => {
  if (!post) return null;

  return (
    <div className='text-left border border-gray-300 mt-10'>
      <hr className='border-1 border-black w-full' />

      <p className='flex flex-col sm:flex-row justify-between px-4 sm:px-20 py-4 sm:py-10 bg-gray-100'>
        <h2 className='text-20 font-bold'>{post.title}</h2>
        {/* 클릭하면 파일 다운 받을 수 있게 로직 추가 */}
        <button>
          <p className='flex flex-row text-sm text-gray-500'>
            파일 다운받기
            <DownloadSimple size={17} />
          </p>
        </button>
      </p>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-row px-10 md:px-20 py-10 space-x-10'>
        <p className=' text-primary-400 text-sm'>{post.author}</p>
        <p className='text-gray-400 text-sm'>{`등록일: ${post.timestamp}`}</p>
        <p className='text-gray-400 text-sm'>{`조회수: ${post.views}`}</p>
      </div>
      <hr className='border-1 border-gray-300 w-full' />

      <div className='flex flex-col'>
        <p className='px-20 my-100'>{post.content}</p>
      </div>
      {/* <button
        onClick={onClose}
        className='mt-10 py-5 px-10 bg-gray-200 rounded'
      >
        목록 전체 보기
      </button> */}
    </div>
  );
};

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
            className='border-3 rounded-lg pr-2 md: p-6 md:pr-50'
          />
        </div>
        <button
          onClick={toggleModal}
          className='text-sm py-2 px-10  md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80`'
        >
          글쓰기
        </button>
      </div>
      {isVisible && (
        <WritePostModal isVisible={isVisible} onClose={toggleModal} />
      )}
      <PostTable onSelectPost={handleSelectPost} />
    </div>
  );
}

export default LevelUp;
