import { get, post } from '@/libs/api';
import { HomeworkAnswer, HomeworkInfo } from '@/types/homework';

class HomeworkApi {
  static async getRepresentativeHomework() {
    return get<HomeworkInfo>(`/homeworks`);
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
