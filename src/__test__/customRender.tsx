import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

function RenderWithProviders({ children }: PropsWithChildren) {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <HelmetProvider>
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default function customRender(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, { wrapper: RenderWithProviders, ...options });
}
