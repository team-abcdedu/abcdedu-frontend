import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import useAuth from './hooks/auth/useAuth';
import { queryClient } from './libs/react-query';
import router from './routes';

// 사용자 정보 초기화
function AuthInitializer() {
  useAuth();
  return null;
}

function App() {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <AuthInitializer />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
