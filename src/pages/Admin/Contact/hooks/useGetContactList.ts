import { keepPreviousData, useQuery } from '@tanstack/react-query';

import contactApi from '@/services/contact';

export default function useGetContactList(currentPage: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['contact', currentPage],
    queryFn: () => contactApi.getContactList(currentPage),
    placeholderData: keepPreviousData,
  });

  const list = data?.content || [];
  const totalElements = data?.totalElements || 0;

  return { list, totalElements, isLoading, isError };
}
