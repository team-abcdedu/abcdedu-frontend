export interface User {
  name: string;
  role: string;
  email: string;
}

export interface UserInfo extends User {
  school: string | null;
  studentId: number | null;
  imageUrl: string | null;
  createdAt: string;
  createPostCount: number;
  createCommentCount: number;
}
