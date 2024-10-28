import { UserInfo } from '@/types/user';

export type ProfileEditInfoType = 'profile' | 'account';

export interface ProfileEditModalProps {
  type?: ProfileEditInfoType;
  user: UserInfo;
  isVisible: boolean;
  onClose: () => void;
}

export type ProfileEditProps = Pick<ProfileEditModalProps, 'user' | 'onClose'>;
