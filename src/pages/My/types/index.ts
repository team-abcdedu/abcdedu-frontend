import { UserInfo } from '@/types/user';

export interface EditModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface ProfileEditModalProps extends EditModalProps {
  user: UserInfo;
}

export interface IPasswordFormInput {
  newPw: string;
  confirmPw: string;
}
