import { keepPreviousData, useQuery } from '@tanstack/react-query';

import AdminUserApi from '@/services/admin/user';

function useGetUserList(currentPage: number) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['user', 'list', currentPage],
    queryFn: () => AdminUserApi.getUsers(currentPage),
    placeholderData: keepPreviousData,
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { list, totalElements, isLoading, isError };
}

export default useGetUserList;
