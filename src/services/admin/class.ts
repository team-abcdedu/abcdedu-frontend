import { post } from '@/libs/api';

class AdminClassApi {
  static async createClass(data: {
    title: string;
    type: string;
    description: string;
  }) {
    return post('/lectures', JSON.stringify(data));
  }

  static async createSubClass(data: {
    classId: number;
    title: string;
    description: string;
    orderNumber: number;
  }) {
    const { classId, ...rest } = data;
    return post(`/lectures/${classId}`, JSON.stringify({ ...rest }));
  }
}

export default AdminClassApi;
