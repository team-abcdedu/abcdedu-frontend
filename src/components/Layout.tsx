import { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '@/components/Footer/index';
import Header from '@/components/Header';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <section className={'relative top-[70px] md:top-[100px]'}>
        <Suspense fallback={<div className='w-full h-[100dvh]'></div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
