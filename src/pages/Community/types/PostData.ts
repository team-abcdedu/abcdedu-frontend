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
