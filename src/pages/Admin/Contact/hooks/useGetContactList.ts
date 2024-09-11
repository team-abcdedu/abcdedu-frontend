import { useQuery } from '@tanstack/react-query';

import contactApi from '@/services/contact';

export default function useGetContactList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['contact'],
    queryFn: () => contactApi.getContactList(),
  });

  const list = data || [];

  return { list, isLoading, isError };
}
