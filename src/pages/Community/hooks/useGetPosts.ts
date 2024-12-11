import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';

import communityApi from '@/services/community';

interface UseGetPostsProps {
  boardName: string;
  page: number;
}

export default function useGetPosts({ boardName, page }: UseGetPostsProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['board', 'list', boardName, `page-${page}`],
    queryFn: () => communityApi.getPosts(boardName, page),
    placeholderData: keepPreviousData,
    enabled: ['free', 'project', 'qna', 'document'].includes(boardName),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  useEffect(() => {
    // 다음 페이지가 존재하면 prefetch
    if (data?.last === false) {
      queryClient.prefetchQuery({
        queryKey: ['board', 'list', boardName, `page-${page + 1}`],
        queryFn: () => communityApi.getPosts(boardName, page + 1),
      });
    }
  }, [boardName, data, page, queryClient]);

  return { list, totalElements, isLoading, isError };
}
