import { useEffect, Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/components/Footer/index';
import Header from '@/components/Header';

import ErrorBoundary from './ErrorBoundary';

function Layout() {
  const location = useLocation();
  const [isAllSectionsLoaded, setIsAllSectionsLoaded] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <section className={'relative top-[70px] xl:top-[100px] min-h-screen'}>
        <ErrorBoundary
          key={`${location.pathname}`}
          onReset={() => window.location.reload()}
        >
          <Suspense fallback={<div className='w-full h-[100dvh]'></div>}>
            <Outlet context={{ setIsAllSectionsLoaded }} />
          </Suspense>
        </ErrorBoundary>
        {(!isHomePage || isAllSectionsLoaded) && <Footer />}
      </section>
    </>
  );
}

export default Layout;
