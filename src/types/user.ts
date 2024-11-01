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

export type UserRoleType = 'BASIC' | 'STUDENT' | 'ADMIN';

export interface UserSummary {
  memberId: number;
  role: UserRoleType;
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
