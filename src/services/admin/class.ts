import { get, post } from '@/libs/api';
import { ClassTableData } from '@/pages/Admin/types';

class AdminClassApi {
  static async getClasses(): Promise<ClassTableData[]> {
    return get('/lectures');
  }

  static async createClass(data: {
    title: string;
    type: string;
    description: string;
  }) {
    return post('/lectures', data);
  }

  static async createSubClass(data: {
    classId: number;
    title: string;
    description: string;
    orderNumber: number;
  }) {
    const { classId, ...rest } = data;
    return post(`/lectures/${classId}`, { ...rest });
  }

  static async uploadDocument({
    subLectureId,
    type,
    file,
  }: {
    subLectureId: number;
    type: string;
    file: File;
  }) {
    const formData = new FormData();
    formData.append('file', file);
    return post(
      `/lectures/sub-lecture/${subLectureId}/file?assignmentType=${type}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }

  static async uploadAnswerTemplate({
    assignmentFieldId,
    file,
  }: {
    assignmentFieldId: number;
    file: File;
  }) {
    const formData = new FormData();
    formData.append('file', file);
    return post(
      `/lectures/assignment-file/${assignmentFieldId}/answer`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }
}

export default AdminClassApi;
