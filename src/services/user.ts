import { get, patch, post } from '@/libs/api';
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

  static async upgradeMembership(postId: number) {
    // 1차 개발에선 학생 등업만 진행
    return post(`/posts/${postId}/levelup/STUDENT`);
  }
}

export default UserApi;
