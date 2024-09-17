import { post, put } from '@/libs/api';
import { CreateHomeworkData } from '@/types/homework';

class AdminHomeworkApi {
  static async createHomework(data: CreateHomeworkData) {
    return post('/admin/homeworks', data);
  }

  static async updateHomework(homeworkId: number, data: CreateHomeworkData) {
    return put(`/admin/homeworks/${homeworkId}`, data);
  }
}

export default AdminHomeworkApi;
