interface Attachment {
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
}

export interface Post {
  postId: number;
  title: string;
  writer: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  attachment: Attachment;
}
// 'content'
export type PostSummary = Omit<Post, 'createdAt' | 'attachment'> & {
  commentCount: number;
};
