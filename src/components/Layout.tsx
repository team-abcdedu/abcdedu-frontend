import { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/components/Footer/index';
import Header from '@/components/Header';

import ErrorBoundary from './ErrorBoundary';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <section className={'relative top-[70px] xl:top-[100px]'}>
        <ErrorBoundary
          key={`${location.pathname}`}
          onReset={() => window.location.reload()}
        >
          <Suspense fallback={<div className='w-full h-[100dvh]'></div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
