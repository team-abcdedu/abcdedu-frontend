import { get } from '@/libs/api';
import { ClassData } from '@/types/class';

class ClassApi {
  static async getClasses(): Promise<ClassData[]> {
    return get('/lectures');
  }

  static async getSubClassFileList(
    subClassId: number,
  ): Promise<{ assignmentType: string; assignmentFileId: number }[]> {
    return get(`/lectures/sub-lecture/${subClassId}`);
  }

  static async getSubClassFile(
    assignmentFileId: number | null,
  ): Promise<{ filePresignedUrl: string; assignmentAnswerFileId: number }> {
    return get(`/lectures/file/${assignmentFileId}`);
  }
}

export default ClassApi;
