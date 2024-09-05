import { post } from '@/libs/api';

class ClassApi {
  static async submitAssignment() {
    return post('/classes');
  }

  static async submitExam() {
    return post('/classes');
  }

  static async submitSurvey() {
    return post('/classes');
  }
}

export default ClassApi;
