import { patch, post } from '@/libs/api';

class AdminClassApi {
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

  static async uploadSubClassFile({
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

  static async updateSubClassFile({
    fileId,
    file,
  }: {
    fileId: number;
    file: File;
  }) {
    const formData = new FormData();
    formData.append('file', file);
    return patch(`/lectures/file/${fileId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default AdminClassApi;
