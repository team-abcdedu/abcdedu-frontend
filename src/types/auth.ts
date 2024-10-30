export type AuthModalType = 'login' | 'register';

export interface AuthModalProps {
  type?: AuthModalType;
  isVisible: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export type AuthModalActions = Pick<AuthModalProps, 'onClose' | 'onToggle'>;

export interface UseAuthFormProps {
  onSuccess: () => void;
}

export interface TokenResponse {
  accessToken: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  school?: string;
  studentId?: number;
  password: string;
}
