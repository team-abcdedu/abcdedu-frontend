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

  static async uploadGeneralFile({
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

  static async updateGeneralFile(assignmentFileId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return patch(`/lectures/file/${assignmentFileId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async uploadStudentFile({
    assignmentFileId,
    file,
  }: {
    assignmentFileId: number;
    file: File;
  }) {
    const formData = new FormData();
    formData.append('file', file);
    return post(
      `/lectures/assignment-file/${assignmentFileId}/answer`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }

  static async updateStudentFile(assignmentAnswerFileId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return patch(
      `/lectures/assignment-file/${assignmentAnswerFileId}`,
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
