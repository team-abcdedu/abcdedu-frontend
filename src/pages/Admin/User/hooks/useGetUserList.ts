import { keepPreviousData, useQuery } from '@tanstack/react-query';

import AdminUserApi from '@/services/admin/user';
import { UserSearchCategory } from '@/types/user';

interface UseGetUserListProps {
  currentPage: number;
  searchCategory: UserSearchCategory;
  searchKey: string;
}

function useGetUserList(props: UseGetUserListProps) {
  const { currentPage, searchCategory, searchKey } = props;

  const filteringKey = searchCategory
    ? `${searchCategory}-${searchKey}`
    : 'no-filtering';

  const { data, isError, isLoading } = useQuery({
    queryKey: ['user', 'list', currentPage, filteringKey],
    queryFn: () => AdminUserApi.getUsers(props),
    placeholderData: keepPreviousData,
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { list, totalElements, isLoading, isError };
}

export default useGetUserList;
