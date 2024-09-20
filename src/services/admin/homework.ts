import { post, put } from '@/libs/api';

class AdminHomeworkApi {
  static async createHomework() {
    return post('/admin/homeworks');
  }

  static async updateHomework(homeworkId: number) {
    return put(`/admin/homeworks/${homeworkId}`);
  }
}

export default AdminHomeworkApi;
