import { del, post } from '@/libs/api';
import { RegisterForm, TokenResponse } from '@/types/auth';

class AuthApi {
  static async signUp(form: RegisterForm) {
    return post('/auth/signup', form);
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
