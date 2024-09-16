// export interface Post {
//   id: number;
//   title: string;
//   author: string;
//   timestamp: string;
//   views: number;
//   comments: number;
//   // likes: number;
//   content?: string; // content는 PostDetails에서만 사용되므로 optional로 지정
// }

export interface Post {
  data: {
    boardId: number; // 게시판 구분
    title: string; // 제목
    content?: string; // 내용
    secret: boolean; // 비밀
    commentAllow: boolean; // 코멘트 얼라우
  };
  file: string;
}

export interface PostTableProps {
  posts: Post[];
  isLevelingUp?: boolean;
  // onSelectPost: (post: Post) => void;
}

export interface PostDetailsProps {
  post: Post;
  onClose: () => void;
}
