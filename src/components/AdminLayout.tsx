import { Link, Outlet } from 'react-router-dom';

import logo from '@/assets/icons/logo.png';

function AdminLayout() {
  const LinkStyle =
    'h-50 flex-row-center gap-20 rounded-lg bg-transparent shadow-2xl shadow-neutral-700 hover:bg-primary-300 transition duration-300';

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
          <Link to={'/admin/class'} className={LinkStyle}>
            클래스 관리
          </Link>
          <Link to={'/admin/exam'} className={LinkStyle}>
            시험 관리
          </Link>
          <Link to={'/admin/assignment'} className={LinkStyle}>
            과제 관리
          </Link>
          <Link to={'/admin/survey'} className={LinkStyle}>
            설문 관리
          </Link>
          <Link to={'/admin/theory'} className={LinkStyle}>
            이론 관리
          </Link>
        </div>
      </aside>
      <section
        className={
          'w-full h-full pt-20 pb-10 px-20 flex flex-col gap-30 bg-white rounded-lg shadow-md'
        }
      >
        <Outlet />
      </section>
    </div>
  );
}

export default AdminLayout;
