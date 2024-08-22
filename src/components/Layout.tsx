import { Outlet } from 'react-router-dom';

import Header from '@/components/header/Header';
// import Footer from '@/components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}

export default Layout;
