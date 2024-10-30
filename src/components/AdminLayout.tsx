import { Suspense } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

import logo from '@/assets/icons/logo.png';

import ErrorBoundary from './ErrorBoundary';

function AdminLayout() {
  const location = useLocation();
  const linkStyle =
    'h-50 flex-row-center gap-20 rounded-lg shadow-2xl shadow-neutral-700 hover:bg-primary-300 transition duration-300';

  const navLinkStyle = (isActive: boolean) => {
    return isActive
      ? `${linkStyle} bg-primary-300`
      : `${linkStyle} bg-transparent`;
  };

  return (
    <div className={'w-full h-screen p-10 flex bg-primary-50 gap-10'}>
      <aside
        className={
          'w-[250px] min-h-[calc(100vh_-_20px)] max-h-max p-20 flex flex-col rounded-lg bg-zinc-700 shadow-md'
        }
      >
        <div className={'pb-30 flex-col-center gap-20 border-b border-white'}>
          <Link to={'/'} className={'flex items-center'}>
            <img src={logo} alt={'logo'} className={'w-20 mr-[10px]'} />
            <span
              className={
                'text-16 font-bold bg-gradient-to-r from-primary-50 via-primary-50 to-white text-transparent bg-clip-text'
              }
            >
              ABCDEdu 관리자
            </span>
          </Link>
          <Link
            to={'/'}
            className={
              'w-full h-40 flex-row-center border-1 border-white rounded-lg text-15 text-white bg-transparent hover:bg-primary-300 transition duration-300'
            }
          >
            홈으로
          </Link>
        </div>
        <div
          className={
            'h-full py-20 flex flex-col gap-10 text-18 font-light text-white'
          }
        >
          <NavLink
            to={'/admin/class'}
            className={({ isActive }) => navLinkStyle(isActive)}
          >
            클래스 관리
          </NavLink>
          <NavLink
            to={'/admin/homework'}
            className={({ isActive }) => navLinkStyle(isActive)}
          >
            과제 관리
          </NavLink>
          <NavLink
            to={'/admin/survey'}
            className={({ isActive }) => navLinkStyle(isActive)}
          >
            설문 관리
          </NavLink>
          <NavLink
            to={'/admin/contact'}
            className={({ isActive }) => navLinkStyle(isActive)}
          >
            문의 관리
          </NavLink>
        </div>
      </aside>
      <section
        className={
          'w-full h-full pt-20 pb-10 px-20 flex flex-col gap-30 bg-white rounded-lg shadow-md'
        }
      >
        <ErrorBoundary
          key={`${location.pathname}`}
          onReset={() => window.location.reload()}
        >
          <Suspense fallback={<div className='w-full h-[100dvh]'></div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
}

export default AdminLayout;
