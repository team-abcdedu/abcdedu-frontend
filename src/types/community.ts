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
}

export type PostSummary = Omit<
  Post,
  'fileUrl' | 'content' | 'commentAllow' | 'writerEmail'
> & {
  postId: number;
};

export interface Comment {
  commentId: number;
  writerName: string;
  writerEmail: string;
  content: string;
  createdAt: string;
}
