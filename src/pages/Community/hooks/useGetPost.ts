import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
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

  const status =
    error instanceof ApiError && error.status ? error.status : null;
  const code =
    error instanceof ApiError && error.errorCode ? error.errorCode : null;

  return { data, isLoading, isFetched, errorResult: { status, code } };
}
