import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import communityApi from '@/services/community';
import useBoundStore from '@/stores';

export default function useGetPost(postId: string) {
  const { accessToken, user } = useBoundStore(state => ({
    accessToken: state.accessToken,
    user: state.user,
  }));

  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ['board', Number(postId), user?.email],
    queryFn: () => communityApi.getPost(Number(postId)),
    enabled: /^\d+$/.test(postId) && !!accessToken,
  });

  const errorCode =
    isAxiosError(error) && error.response?.status
      ? error.response?.status
      : null;

  return { data, isLoading, isFetched, errorCode };
}
