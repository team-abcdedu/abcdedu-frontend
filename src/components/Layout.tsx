import { useEffect } from 'react';
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
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default Layout;
