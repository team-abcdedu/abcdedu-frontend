import { get, post, put } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { HomeworkSummary } from '@/types/homework';

class AdminHomeworkApi {
  static async createHomework() {
    return post('/admin/homeworks');
  }

  static async updateHomework(homeworkId: number) {
    return put(`/admin/homeworks/${homeworkId}`);
  }

  static async getHomeworkList({ page, size }: { page: number; size: number }) {
    return get<PaginatedResponse<HomeworkSummary>>(
      `/admin/homeworks?page=${page}&size=${size}`,
    );
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
    return get<Blob | ArrayBuffer>(`/admin/homeworks/replies/excel`, {
      params: {
        homeworkId,
        fromDate: `${fromDate}T00:00:00`,
        toDate: `${toDate}T23:59:59`,
      },
      responseType: 'blob',
    });
  }
}

export default AdminHomeworkApi;
