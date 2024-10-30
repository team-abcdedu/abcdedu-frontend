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

export interface UserSummary {
  memberId: number;
  role: 'BASIC' | 'STUDENT' | 'ADMIN';
  name: string;
  email: string;
  school: string;
  studentId: number;
  createdAt: string;
}

export type UserSearchCategory =
  | 'school'
  | 'name'
  | 'studentId'
  | 'role'
  | null;
