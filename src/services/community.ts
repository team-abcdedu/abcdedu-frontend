import { del, get, patch, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { Post, PostSummary } from '@/types/community';

class CommunityApi {
  static async createPost(form: FormData) {
    return post(`/posts/`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  static async getPosts(boardId: number, page: number) {
    return get<PaginatedResponse<PostSummary>>(`/boards/${boardId}/posts`, {
      params: { page },
    });
  }

  static async getPost(id: number) {
    return get<Post>(`/posts/${id}`);
  }

  static async updatePost(id: number, form: FormData) {
    return patch(`/posts/${id}`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  static async deletePost(id: number) {
    return del(`/posts/${id}`);
  }
}

export default CommunityApi;
