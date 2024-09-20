import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export const clearAllQueries = (except: string = '') => {
  const allQueries = queryClient.getQueryCache().getAll();
  allQueries.forEach(query => {
    if (!query.queryKey.includes(except)) {
      queryClient.removeQueries({ queryKey: query.queryKey });
    }
  });
};
