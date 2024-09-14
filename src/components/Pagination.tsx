import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useState, useEffect, Fragment } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

interface Props {
  currentPage: number; // 현재 페이지
  totalElements: number; // 전체 데이터 개수
  itemCountPerPage?: number; // 페이지 당 데이터 개수
  pageCount?: number; // 한 번에 보여줄 페이지 개수 (e.g. 5, 10 ...)
}

export default function Pagination({
  currentPage,
  totalElements,
  itemCountPerPage = 10,
  pageCount = 5,
}: Props) {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const [start, setStart] = useState(1);
  const totalPages = Math.ceil(totalElements / itemCountPerPage);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;

  const getUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const pageNumberStyle = (isActive: boolean) =>
    isActive
      ? 'font-bold text-primary-400 border-neutral-200'
      : ' border-neutral-200/0';

  const moveLinkStyle = 'flex-row-center mx-10';

  // 현재 보여줄 페이지 숫자 목록
  useEffect(() => {
    if (currentPage >= start + pageCount) setStart(prev => prev + pageCount);
    if (currentPage < start) setStart(prev => prev - pageCount);
  }, [currentPage, pageCount, start]);

  if (totalPages === 1) return null;

  return (
    <div className='flex-row-center text-14 text-neutral-500 mt-30'>
      <ul className='flex-row-center [&>li]:h-30 [&>li]:leading-[30px]'>
        <li className={`${noPrev && 'invisible'}`}>
          <Link to={getUrl(start - 1)} className={moveLinkStyle}>
            <CaretLeft size={20} />
            이전
          </Link>
        </li>
        {[...Array(pageCount)].map((_, i) => (
          <Fragment key={start + i}>
            {start + i <= totalPages && (
              <li>
                <Link
                  className={`block min-w-30 px-2 leading-[28px] text-center rounded-lg border-1 
                    lg:hover:border-neutral-200 mx-2 ${pageNumberStyle(
                      currentPage === start + i,
                    )}`}
                  to={getUrl(start + i)}
                >
                  {start + i}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
        <li className={`${noNext && 'invisible'}`}>
          <Link to={getUrl(start + pageCount)} className={moveLinkStyle}>
            다음
            <CaretRight size={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
