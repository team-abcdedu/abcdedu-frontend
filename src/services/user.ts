import { get, patch } from '@/libs/api';
import { User, UserInfo } from '@/types/user';

class UserApi {
  static async getNameAndRole() {
    return get<User>('/members/info/name-and-role');
  }

  static async getUserInfo() {
    return get<UserInfo>('/members/info');
  }

  static async updateUserInfo(form: FormData) {
    return patch('/members/info', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default UserApi;
