import { useQuery } from '@tanstack/react-query';

import userApi from '@/services/user';

export default function useGetProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => userApi.getUserInfo(),
  });

  return { user: data, isLoading };
}
