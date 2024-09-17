import { get, post } from '@/libs/api';
import { ClassData } from '@/types/class';

class ClassApi {
  static async getClasses(): Promise<ClassData[]> {
    return get('/lectures');
  }

  static async getSubClassFileList(
    subLectureId: number,
  ): Promise<{ assignmentType: string; assignmentFileId: number }[]> {
    return get(`/lectures/sub-lecture/${subLectureId}`);
  }

  static async getSubClassFile(
    assignmentFileId: number | null,
  ): Promise<{ filePresignedUrl: string; assignmentAnswerFileId: string }> {
    if (!assignmentFileId) {
      return get(`/lectures/file/${assignmentFileId}`);
    }
    return { filePresignedUrl: '', assignmentAnswerFileId: '' };
  }

  static async getSubClassAnswerFile(
    assignmentAnswerFileId: number | null,
  ): Promise<{ filePresignedUrl: string }> {
    if (!assignmentAnswerFileId) {
      return get(`/lectures/answer-file/${assignmentAnswerFileId}`);
    }
    return { filePresignedUrl: '' };
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
