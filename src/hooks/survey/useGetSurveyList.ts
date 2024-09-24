import { useQuery } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import SurveyApi from '@/services/survey';

interface UseGetSurveyListProps {
  page: number;
  size?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

function useGetSurveyList({
  page,
  size = 10,
  sortBy = '',
  sortDirection = 'desc',
}: UseGetSurveyListProps) {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: [
      'survey',
      'list',
      `page-${page}`,
      `size-${size}`,
      `sortBy-${sortBy}`,
      `sortDirection-${sortDirection}`,
    ],
    queryFn: () =>
      SurveyApi.getSurveyList({ page, size, sortBy, sortDirection }),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const errorStatus =
    error instanceof ApiError && error.status ? error.status : null;

  return {
    list,
    totalElements,
    isError,
    isLoading,
    errorStatus,
  };
}

export default useGetSurveyList;
