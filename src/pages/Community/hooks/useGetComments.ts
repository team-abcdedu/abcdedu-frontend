import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';

import communityApi from '@/services/community';

interface UseGetCommentsProps {
  postId: number;
  page: number;
}

export default function useGetComments({ postId, page }: UseGetCommentsProps) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['comments', postId, `page-${page}`],
    queryFn: () => communityApi.getComments(postId, page),
    placeholderData: keepPreviousData,
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  useEffect(() => {
    // 다음 페이지가 존재하면 prefetch
    if (data?.last === false) {
      queryClient.prefetchQuery({
        queryKey: ['comments', postId, `page-${page + 1}`],
        queryFn: () => communityApi.getComments(postId, page + 1),
      });
    }
  }, [data, page, postId, queryClient]);

  return { list, totalElements, isLoading };
}
