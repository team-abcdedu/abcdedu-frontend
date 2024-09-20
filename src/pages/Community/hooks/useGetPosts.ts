import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import communityApi from '@/services/community';

interface UseGetPostsProps {
  boardId: number;
  page: number;
}

export default function useGetPosts({ boardId, page }: UseGetPostsProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['board', 'list', boardId, `page-${page}`],
    queryFn: () => communityApi.getPosts(boardId, page),
    enabled: [1, 2, 3, 4].includes(boardId),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  useEffect(() => {
    // 다음 페이지가 존재하면 prefetch
    if (data?.last === false) {
      queryClient.prefetchQuery({
        queryKey: ['board', 'list', boardId, `page-${page + 1}`],
        queryFn: () => communityApi.getPosts(boardId, page + 1),
      });
    }
  }, [boardId, data, page, queryClient]);

  return { list, totalElements, isLoading, isError };
}
