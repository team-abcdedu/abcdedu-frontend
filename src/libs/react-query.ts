import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export const clearSelectedQueries = (selectedQueries: string[] = []) => {
  queryClient
    .getQueryCache()
    .getAll()
    .filter(query =>
      selectedQueries.some(selectedQuery =>
        query.queryKey.includes(selectedQuery),
      ),
    )
    .forEach(query => queryClient.removeQueries({ queryKey: query.queryKey }));
};
