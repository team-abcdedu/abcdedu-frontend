import { Link } from 'react-router-dom';

import Dropdown from '@/components/Dropdown';

function Header() {
  return (
    <header
      className={
        'w-screen h-72 flex justify-between items-center text-15 border-b-1 border-b-blue-800 px-24'
      }
    >
      <div className={'grid place-items-center'}>
        <Link to={'/'}>ABCDEdu</Link>
      </div>
      <div className={'grid place-items-center'}>
        <nav className={'flex flex-end gap-12'}>
          <Link
            to={'/'}
            className={'px-12 grid place-items-center min-h-40 max-h-46'}
          >
            홈
          </Link>
          <Dropdown
            defaultDisplay={
              <Link to={'/about_us'} className={'px-12'}>
                회사소개
              </Link>
            }
            defaultDisplayClassName={'min-h-40 max-h-46'}
          >
            <Link to={'/about_us'} className={'px-12 '}>
              비즈니스
            </Link>
            <Link to={'/about_us_gallery'} className={'px-12'}>
              갤러리
            </Link>
            <Link to={'/about_us_history'} className={'px-12'}>
              히스토리
            </Link>
          </Dropdown>

          <Dropdown
            defaultDisplay={
              <Link to={'/classes'} className={'px-12'}>
                클래스
              </Link>
            }
          >
            <Link to={'/class_a'} className={'px-12'}>
              A-Class
            </Link>
            <Link to={'/class_b'} className={'px-12'}>
              B-Class
            </Link>
            <Link to={'/class_c'} className={'px-12'}>
              C-Class
            </Link>
            <Link to={'/class_d'} className={'px-12'}>
              D-Class
            </Link>
          </Dropdown>
          <Dropdown
            defaultDisplay={
              <Link to={'/community'} className={'px-12'}>
                커뮤니티
              </Link>
            }
          >
            <Link to={'/community_levelup'} className={'px-12'}>
              등업 게시판
            </Link>
            <Link to={'/community_project'} className={'px-12'}>
              ABCD Project
            </Link>
            <Link to={'/community_qna'} className={'px-12'}>
              Q & A
            </Link>
            <Link to={'/community_submit_assignment'} className={'px-12'}>
              과제 제출
            </Link>
            <Link to={'/community_bulletin_board'} className={'px-12'}>
              자유게시판
            </Link>
          </Dropdown>
          <Link to={'/contact'} className={'px-12 grid place-items-center'}>
            문의
          </Link>
          <button
            className={
              'px-24 grid place-items-center border-1 rounded-md border-blue-800 text-blue-800'
            }
          >
            로그인
          </button>
          <button
            className={
              'px-24 grid place-items-center rounded-md bg-blue-800 text-white'
            }
          >
            회원가입
          </button>
          <select
            className={
              'p-6 grid place-items-center w-80 font-extralight underline text-14'
            }
            defaultValue={'Korean'}
          >
            <option>Korean</option>
            <option>English</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
