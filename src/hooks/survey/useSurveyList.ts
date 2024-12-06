import { useQuery } from '@tanstack/react-query';

import SurveyApi from '@/services/survey';

interface UseSurveyListProps {
  page: number;
  size?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

function useSurveyList({
  page,
  size = 10,
  sortBy = '',
  sortDirection = 'desc',
}: UseSurveyListProps) {
  const { data, isError, isLoading } = useQuery({
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

  const surveyList = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return {
    surveyList,
    totalElements,
    isError,
    isLoading,
  };
}

export default useSurveyList;
