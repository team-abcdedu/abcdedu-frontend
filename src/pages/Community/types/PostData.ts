export interface Post {
  id: number;
  title: string;
  author: string;
  timestamp: string;
  views: number;
  comments: number;
  likes: number;
  content?: string; // content는 PostDetails에서만 사용되므로 optional로 지정
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
