import { useQuery } from '@tanstack/react-query';

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
  const { data, isError, isLoading } = useQuery({
    queryKey: ['surveyList'],
    queryFn: () =>
      SurveyApi.getSurveyList({ page, size, sortBy, sortDirection }),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { list, totalElements, isError, isLoading };
}

export default useGetSurveyList;
