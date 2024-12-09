export interface AdjacentPost {
  id: number;
  title: string;
  secret: boolean;
  writerEmail: string;
}

export interface Post {
  title: string;
  writer: string;
  writerEmail: string;
  content: string;
  createdAt: string;
  viewCount: number;
  fileUrl: string | null;
  commentAllow: boolean;
  commentCount: number;
  secret: boolean;
  prev: AdjacentPost | null;
  next: AdjacentPost | null;
}

export type PostSummary = Omit<Post, 'fileUrl' | 'content' | 'commentAllow'> & {
  postId: number;
};

export interface Comment {
  commentId: number;
  writerName: string;
  writerEmail: string;
  content: string;
  createdAt: string;
}
