import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import communityApi from '@/services/community';
import useBoundStore from '@/stores';

export default function useGetPost(postId: string) {
  const user = useBoundStore(state => state.user);

  const { data, isLoading, isFetched, error } = useQuery({
    queryKey: ['board', Number(postId), user?.email],
    queryFn: () => communityApi.getPost(Number(postId)),
    enabled: /^\d+$/.test(postId) && !!user,
  });

  const status = error instanceof ApiError ? error.status : null;
  const code =
    error instanceof ApiError && error.errorCode ? error.errorCode : null;

  return { data, isLoading, isFetched, errorResult: { status, code } };
}
