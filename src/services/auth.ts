import { post } from '@/libs/api';
import { TokenResponse } from '@/types/auth';

class AuthApi {
  static async signUp(name: string, email: string, password: string) {
    return post('/auth/signup', {
      name,
      email,
      password,
    });
  }

  static async login(email: string, password: string) {
    return post<TokenResponse>('/auth/login', {
      email,
      password,
    });
  }
}

export default AuthApi;
