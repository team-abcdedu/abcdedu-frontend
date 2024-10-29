import { get, patch } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { UserSummary } from '@/types/user';

class AdminUserApi {
  static async getUsers(page: number) {
    return get<PaginatedResponse<UserSummary>>(`/admin/members/`, {
      params: { page },
    });
  }

  static async patchUserRole(roleName: 'STUDENT') {
    return patch(`/admin/members/role/${roleName}`);
  }
}

export default AdminUserApi;
