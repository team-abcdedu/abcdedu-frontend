// 게시글 타입 정의
interface Post {
  title: string;
  author: string;
  timestamp: string;
  views: number;
  content: string;
  comments: number;
  likes: number;
}

// 목업 데이터
export const posts: Post[] = [
  {
    title: '여름휴가 추천 여행지',
    author: '여행러버',
    timestamp: '2024-08-25 14:30',
    views: 1250,
    content:
      '올해 여름휴가를 어디로 갈지 고민이라면, 이곳을 추천합니다! 여름에 가기 좋은 여행지 TOP 5를 소개합니다.',
    comments: 45,
    likes: 150,
  },
  {
    title: '신제품 리뷰: 최신 스마트폰',
    author: '기술덕후',
    timestamp: '2024-08-26 09:45',
    views: 950,
    content:
      '이번에 출시된 최신 스마트폰을 직접 사용해보고 리뷰를 남깁니다. 기대 이상으로 좋네요!',
    comments: 30,
    likes: 75,
  },
  {
    title: '집에서 만드는 간단한 디저트 레시피',
    author: '요리왕',
    timestamp: '2024-08-27 08:20',
    views: 340,
    content: '재료도 간단하고 맛도 좋은 디저트를 집에서 쉽게 만들어보세요!',
    comments: 12,
    likes: 60,
  },
  {
    title: '2024년 주목해야 할 투자 트렌드',
    author: '투자전문가',
    timestamp: '2024-08-24 11:10',
    views: 1980,
    content:
      '올해 하반기에는 이 투자 트렌드에 주목해야 합니다. 예상되는 주요 변화와 기회들을 짚어봅니다.',
    comments: 55,
    likes: 200,
  },
  {
    title: '요가로 건강 지키기: 초보자를 위한 팁',
    author: '헬시라이프',
    timestamp: '2024-08-22 18:00',
    views: 890,
    content:
      '요가를 처음 시작하는 분들을 위한 간단한 팁과 자세 소개. 건강한 삶을 시작해보세요!',
    comments: 20,
    likes: 80,
  },
  {
    title: '비건 식단의 장점과 단점',
    author: '비건러',
    timestamp: '2024-08-21 16:45',
    views: 720,
    content:
      '비건 식단의 장점과 단점에 대해 알아보고, 비건 라이프스타일이 당신에게 맞는지 확인해보세요.',
    comments: 15,
    likes: 70,
  },
  {
    title: '영화 리뷰: 이번 주말 꼭 봐야 할 영화',
    author: '무비홀릭',
    timestamp: '2024-08-26 13:50',
    views: 640,
    content:
      '이번 주말에 놓치면 안 될 영화 추천! 스포일러 없이 간단 리뷰로 알려드립니다.',
    comments: 25,
    likes: 85,
  },
  {
    title: '효율적인 시간 관리 방법',
    author: '타임매니저',
    timestamp: '2024-08-23 10:00',
    views: 1100,
    content:
      '바쁜 일상 속에서도 시간을 효율적으로 관리할 수 있는 방법을 소개합니다.',
    comments: 40,
    likes: 120,
  },
  {
    title: '가을철 피부 관리 팁',
    author: '뷰티매니아',
    timestamp: '2024-08-20 12:30',
    views: 560,
    content:
      '가을철 건조해지는 피부를 위한 관리법을 공유합니다. 간단한 루틴으로 건강한 피부를 유지해보세요.',
    comments: 18,
    likes: 65,
  },
  {
    title: '온라인 강의로 공부하기: 성공적인 학습 전략',
    author: '공부왕',
    timestamp: '2024-08-25 17:15',
    views: 670,
    content:
      '온라인 강의에서 성공적으로 학습할 수 있는 전략과 팁을 알려드립니다.',
    comments: 28,
    likes: 90,
  },
  {
    title: '새로운 취미로 배운 기타 연주 후기',
    author: '음악초보',
    timestamp: '2024-08-27 09:40',
    views: 430,
    content:
      '최근 시작한 기타 연주. 생각보다 어렵지만 재미있네요! 연습 팁도 공유합니다.',
    comments: 16,
    likes: 50,
  },
  {
    title: '환경을 위한 작은 실천들',
    author: '에코워리어',
    timestamp: '2024-08-24 15:50',
    views: 760,
    content: '일상에서 쉽게 실천할 수 있는 환경 보호 방법들을 소개합니다.',
    comments: 22,
    likes: 95,
  },
  {
    title: '효율적인 재택근무를 위한 공간 정리법',
    author: '워크홈러',
    timestamp: '2024-08-26 11:00',
    views: 810,
    content:
      '재택근무 환경을 효율적으로 정리하고, 생산성을 높이는 방법을 공유합니다.',
    comments: 35,
    likes: 110,
  },
];

// // 게시글 컴포넌트
// const PostList: React.FC = () => {
//     return (
//         <div>
//             {posts.map((post, index) => (
//                 <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
//                     <h2>{post.title}</h2>
//                     <p><strong>글쓴이:</strong> {post.author}</p>
//                     <p><strong>작성시간:</strong> {post.timestamp}</p>
//                     <p><strong>조회수:</strong> {post.views}</p>
//                     <p>{post.content}</p>
//                     <p><strong>댓글:</strong> {post.comments} <strong>좋아요:</strong> {post.likes}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PostList;
