import { get } from '@/libs/api';
import { User } from '@/types/user';

class UserApi {
  static async getNameAndRole() {
    return get<User>('/members/info/name-and-role');
  }
}

export default UserApi;
