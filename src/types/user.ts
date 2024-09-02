export interface User {
  name: string;
  role: string; // 더 strict하게 수정 가능성 있음
}

export interface UserInfo extends User {
  email: string;
  school: string | null;
  studentId: number | null;
  imageUrl: string | null;
  createdAt: string;
  createPostCount: number;
  createCommentCount: number;
}
