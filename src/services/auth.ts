import { del, get, post } from '@/libs/api';
import { RegisterForm, TokenResponse } from '@/types/auth';

class AuthApi {
  static async signUp(form: RegisterForm) {
    return post('/auth/signup', form);
  }

  static async requestVerificationCode(email: string) {
    return post('/mail/code', { email });
  }

  static async verifyCode(email: string, code: string) {
    return get('/mail/code', { params: { email, code } });
  }

  static async requestTempPassword(email: string) {
    return post('/mail/temp-password', { email });
  }

  static async login(email: string, password: string) {
    return post<TokenResponse>('/auth/login', {
      email,
      password,
    });
  }

  static async logout() {
    return del('/auth/logout');
  }
}

export default AuthApi;
