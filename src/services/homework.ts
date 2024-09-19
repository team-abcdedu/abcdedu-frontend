import { get, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import {
  HomeworkAnswer,
  HomeworkInfo,
  HomeworkSummary,
} from '@/types/homework';

class HomeworkApi {
  static async getHomeworkList({ page, size }: { page: number; size: number }) {
    return get<PaginatedResponse<HomeworkSummary>>(
      `/homeworks?page=${page}&size=${size}`,
    );
  }

  static async getHomework({ homeworkId }: { homeworkId: number }) {
    return get<HomeworkInfo>(`/homeworks/${homeworkId}`);
  }

  static async postHomework({
    homeworkId,
    answers,
  }: {
    homeworkId: number;
    answers: HomeworkAnswer[];
  }) {
    return post<HomeworkAnswer[]>(`/homeworks/${homeworkId}/replies`, answers);
  }
}

export default HomeworkApi;
