import { post, put } from '@/libs/api';
import { CreateHomeworkForm } from '@/types/homework';

class AdminHomeworkApi {
  static async createHomework(data: CreateHomeworkForm) {
    return post('/admin/homeworks', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async updateHomework(homeworkId: number, data: CreateHomeworkForm) {
    return put(`/admin/homeworks/${homeworkId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default AdminHomeworkApi;
