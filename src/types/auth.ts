export type AuthModalType = 'login' | 'register' | 'reset_password';

export interface AuthModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export interface AuthFormProps {
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
