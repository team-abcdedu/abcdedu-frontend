import { get, post, put } from '@/libs/api';
import { HomeworkSummary } from '@/types/homework';

class AdminHomeworkApi {
  static async createHomework() {
    return post('/admin/homeworks');
  }

  static async updateHomework(homeworkId: number) {
    return put(`/admin/homeworks/${homeworkId}`);
  }

  static async getHomeworkList({ page, size }: { page: number; size: number }) {
    // return get<PaginatedResponse<HomeworkSummary>>(
    //   `/admin/homeworks?page=${page}&size=${size}`,
    // );
    return get<HomeworkSummary[]>(`/admin/homeworks?page=${page}&size=${size}`);
  }

  static async getHomeworkRepliesExcel({
    homeworkId,
    fromDate,
    toDate,
  }: {
    homeworkId: number;
    fromDate: string;
    toDate: string;
  }) {
    return get(`/admin/homeworks/replies/excel`, {
      params: { homeworkId, fromDate, toDate },
    });
  }
}

export default AdminHomeworkApi;
