import { del, get, patch, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { Comment, Post, PostSummary } from '@/types/community';

class CommunityApi {
  static async createPost(form: FormData) {
    return post<number>(`/posts`, form, {
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

  // 댓글 API

  static async getComments(postId: number, page: number) {
    return get<PaginatedResponse<Comment>>(`/posts/${postId}/comments`, {
      params: { page },
    });
  }

  static async createComment(postId: number, content: string) {
    return post(`/posts/${postId}/comments`, { content });
  }

  static async updateComment(commentId: number, content: string) {
    return patch(`/comments/${commentId}`, { content });
  }

  static async deleteComment(postId: number, commentId: number) {
    return del(`/posts/${postId}/comments/${commentId}`);
  }
}

export default CommunityApi;
