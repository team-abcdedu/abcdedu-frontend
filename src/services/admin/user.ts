import { get, patch } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { UserSearchCategory, UserSummary } from '@/types/user';

class AdminUserApi {
  static async getUsers({
    currentPage,
    searchCategory,
    searchKey,
  }: {
    currentPage: number;
    searchCategory: UserSearchCategory;
    searchKey: string;
  }) {
    const params: Record<string, string | number> = { page: currentPage };

    if (searchCategory === 'school') params.school = searchKey;
    else if (searchCategory === 'name') params.name = searchKey;
    else if (searchCategory === 'studentId') params.studentId = searchKey;
    else if (searchCategory === 'role') params.role = searchKey;

    return get<PaginatedResponse<UserSummary>>(`/admin/members/`, {
      params,
    });
  }

  static async patchUserRole(roleName: 'STUDENT') {
    return patch(`/admin/members/role/${roleName}`);
  }
}

export default AdminUserApi;
