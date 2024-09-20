import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

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
    queryKey: ['surveyList'],
    queryFn: () =>
      SurveyApi.getSurveyList({ page, size, sortBy, sortDirection }),
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  const errorCode = isAxiosError(error) ? error.response?.status : null;

  return { list, totalElements, isError, isLoading, errorCode };
}

export default useGetSurveyList;
