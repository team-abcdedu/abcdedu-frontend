import { useQuery } from '@tanstack/react-query';

import contactApi from '@/services/contact';

export default function useGetContact(contactId: number | null) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['contact', contactId],
    queryFn: () => contactApi.getContactDetail(Number(contactId)),
    enabled: Boolean(contactId),
  });

  return { data, isLoading, isError };
}
