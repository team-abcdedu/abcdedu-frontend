import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { queryClient } from '@/libs/react-query';

function RenderWithProviders({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HelmetProvider>
  );
}

export default function customRender(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, { wrapper: RenderWithProviders, ...options });
}
