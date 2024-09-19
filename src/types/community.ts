export interface Post {
  postId: number;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  viewCount: number;
  fileUrl: string | null;
  commentAllow: boolean;
  secret: boolean;
}

export type PostSummary = Omit<Post, 'fileUrl' | 'content' | 'commentAllow'> & {
  commentCount: number;
};
