import { get, post } from '@/libs/api';
import { ClassTableData } from '@/pages/Admin/types';

class ClassApi {
  static async getClasses(): Promise<ClassTableData[]> {
    return get('/lectures');
  }

  static async getSubClassFiles(
    subLectureId: number,
  ): Promise<{ assignmentType: string; assignmentFileId: number }[]> {
    return get(`/lectures/sub-lecture/${subLectureId}`);
  }

  static async getSubClassFile(
    assignmentFileId: number,
  ): Promise<{ filePresignedUrl: string; assignmentAnswerFileId: string }> {
    return get(`/lectures/file/${assignmentFileId}`);
  }

  static async getSubClassAnswerFile(
    fileId: number,
  ): Promise<{ a: string; b: string }> {
    return get(`/lectures/answer-file/${fileId}`);
  }

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
