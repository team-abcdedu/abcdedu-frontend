// 임시
export interface MemberInfo {
  name: string;
  joinDate: string;
  level: string;
  school: string;
  studentId: string;
  email: string;
  totalPost: number;
  totalComment: number;
  profileImg: string;
}

export type ProfileEditInfoType = 'profile' | 'account';

export interface ProfileEditModalProps {
  type?: ProfileEditInfoType;
  isVisible: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export type ProfileEditProps = Pick<
  ProfileEditModalProps,
  'onClose' | 'onToggle'
>;

export type AccountEditProps = Pick<ProfileEditModalProps, 'onToggle'>;
