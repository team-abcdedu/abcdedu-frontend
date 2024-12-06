import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Mock } from 'vitest';

import Pagination from './Pagination';

const windowMock = {
  scrollTo: vi.fn(),
};

Object.assign(global, windowMock);

const renderPagination = ({
  currentPage,
  totalElements,
  itemCountPerPage = 10,
  pageCount = 5,
  useQueryString = true,
  onPageChange,
  scrollTarget,
}: {
  currentPage: number;
  totalElements: number;
  itemCountPerPage?: number;
  pageCount?: number;
  useQueryString?: boolean;
  onPageChange?: Mock;
  scrollTarget?: React.RefObject<HTMLElement>;
}) => {
  render(
    <MemoryRouter
      initialEntries={[useQueryString ? `/?page=${currentPage}` : `/`]}
    >
      <Routes>
        <Route
          path='/'
          element={
            <Pagination
              currentPage={currentPage}
              totalElements={totalElements}
              itemCountPerPage={itemCountPerPage}
              pageCount={pageCount}
              useQueryString={useQueryString}
              onPageChange={onPageChange}
              scrollTarget={scrollTarget}
            />
          }
        />
      </Routes>
    </MemoryRouter>,
  );
};

describe('Pagination', () => {
  test('페이지 번호와 링크들이 올바르게 렌더링된다.', () => {
    renderPagination({ currentPage: 7, totalElements: 100 });
    const pageLinks = screen.getAllByRole('link');
    expect(pageLinks.length).toBe(7); // 이전, 6~10, 다음
    expect(pageLinks[1]).toHaveTextContent('6');
    expect(pageLinks[5]).toHaveTextContent('10');
  });

  test('"이전" 버튼이 첫 페이지에서 보이지 않는다.', () => {
    renderPagination({ currentPage: 1, totalElements: 100 });
    const prevButton = screen.getByText('이전');
    expect(prevButton.parentElement).toHaveClass('invisible');
  });

  test('"다음" 버튼이 마지막 페이지 그룹에서 비활성화된다', () => {
    renderPagination({ currentPage: 10, totalElements: 100 });
    const nextButton = screen.getByText('다음');
    expect(nextButton.parentElement).toHaveClass('invisible');
  });

  test('전체 페이지가 하나보다 적을 때 아무것도 렌더링되지 않는다', () => {
    renderPagination({ currentPage: 1, totalElements: 5 });
    const pagination = screen.queryByRole('list');
    expect(pagination).toBeNull();
  });

  test('링크를 클릭하면 onPageChange가 호출된다', () => {
    const mockOnPageChange = vi.fn();
    renderPagination({
      currentPage: 1,
      totalElements: 100,
      onPageChange: mockOnPageChange,
    });

    const secondPageLink = screen.getByText('2');
    fireEvent.click(secondPageLink);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);

    const nextButton = screen.getByText('다음');
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  });

  test('페이지 변경 시 최상단으로 스크롤이 이동된다.', () => {
    renderPagination({ currentPage: 1, totalElements: 100 });

    const secondPageLink = screen.getByText('2');
    fireEvent.click(secondPageLink);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('scrollTarget이 있다면 페이지 변경 시 특정 타겟으로 스크롤이 이동된다', () => {
    const mockTarget = document.createElement('div');
    const ref = { current: mockTarget } as React.RefObject<HTMLElement>;
    document.body.appendChild(mockTarget);

    const scrollToMock = vi.fn();
    mockTarget.scrollIntoView = scrollToMock;

    renderPagination({ currentPage: 1, totalElements: 100, scrollTarget: ref });

    const secondPageLink = screen.getByText('2');
    fireEvent.click(secondPageLink);

    expect(scrollToMock).toHaveBeenCalled();
    document.body.removeChild(mockTarget);
  });
});
