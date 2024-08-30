import { post } from '@/libs/api';

class AuthApi {
  async signUp(name: string, email: string, password: string) {
    return post('/auth/signup', {
      name,
      email,
      password,
    });
  }
}

export default new AuthApi();
