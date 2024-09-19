import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import communityApi from '@/services/community';
import useBoundStore from '@/stores';

export default function useGetPost(postId: string) {
  const user = useBoundStore(state => state.user);

  const { data, isLoading, error } = useQuery({
    queryKey: ['board', Number(postId)],
    queryFn: () => communityApi.getPost(Number(postId)),
    enabled: /^\d+$/.test(postId) && !!user,
  });

  const errorCode =
    isAxiosError(error) && error.response?.status
      ? error.response?.status
      : null;

  return { data, isLoading, errorCode };
}
