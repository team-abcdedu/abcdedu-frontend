export interface Post {
  postId: number;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  viewCount: number;
  fileDownloadUrl: string | null;
  commentAllow: boolean;
  secret: boolean;
}

export type PostSummary = Omit<
  Post,
  'fileDownloadUrl' | 'content' | 'commentAllow'
> & {
  commentCount: number;
};
