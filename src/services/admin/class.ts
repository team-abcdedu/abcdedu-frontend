import { post } from '@/libs/api';

class AdminClassApi {
  static async createClass(data: {
    title: string;
    type: string;
    description: string;
  }) {
    return post('/lectures', JSON.stringify(data));
  }
}

export default AdminClassApi;
