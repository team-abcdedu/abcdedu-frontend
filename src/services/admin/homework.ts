import { get, post, put } from '@/libs/api';
import { HomeworkReplies } from '@/types/homework';

class AdminHomeworkApi {
  static async createHomework() {
    return post('/admin/homeworks');
  }

  static async updateHomework(homeworkId: number) {
    return put(`/admin/homeworks/${homeworkId}`);
  }

  static async getHomeworkReplies({ homeworkId }: { homeworkId: number }) {
    return get<HomeworkReplies>(`/admin/homeworks/${homeworkId}/replies`);
  }
}

export default AdminHomeworkApi;
