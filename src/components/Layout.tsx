import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer/index';
import Header from '@/components/Header';

function Layout() {
  return (
    <>
      <Header />
      <section className={'relative sm:top-[100px]'}>
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default Layout;
