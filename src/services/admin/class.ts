import { get, post } from '@/libs/api';
import { ClassTableData } from '@/types/admin';

class AdminClassApi {
  static async getClasses(): Promise<ClassTableData[]> {
    return get('/lectures');
  }

  static async createClass(data: {
    title: string;
    type: string;
    description: string;
  }) {
    return post('/lectures', data);
  }

  static async createSubClass(data: {
    classId: number;
    title: string;
    description: string;
    orderNumber: number;
  }) {
    const { classId, ...rest } = data;
    return post(`/lectures/${classId}`, { ...rest });
  }
}

export default AdminClassApi;
