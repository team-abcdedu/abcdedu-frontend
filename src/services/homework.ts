import { get, post } from '@/libs/api';
import { HomeworkAnswer, HomeworkInfo } from '@/types/homework';

class HomeworkApi {
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
