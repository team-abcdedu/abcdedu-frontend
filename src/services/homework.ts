import { get, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import {
  HomeworkInfo,
  HomeworkSummary,
  MyHomeworkAnswerInfo,
} from '@/types/homework';

class HomeworkApi {
  static async getHomeworks(page: number, size: number = 10) {
    return get<PaginatedResponse<HomeworkSummary>>(
      `/homeworks?page=${page}&size=${size}`,
    );
  }

  static async getHomework(homeworkId: number) {
    return get<HomeworkInfo>(`/homeworks/${homeworkId}`);
  }

  static async getMyHomework(homeworkId: number) {
    return get<MyHomeworkAnswerInfo[]>(`/homeworks/${homeworkId}/replies/me`);
  }

  static async postMyHomework(
    homeworkId: number,
    answers: MyHomeworkAnswerInfo[],
  ) {
    const data = { userReplies: answers };
    return post<MyHomeworkAnswerInfo[]>(
      `/homeworks/${homeworkId}/replies`,
      data,
    );
  }
}

export default HomeworkApi;
