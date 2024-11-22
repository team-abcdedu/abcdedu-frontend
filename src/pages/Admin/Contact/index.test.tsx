import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import customRender from '@/__test__/customRender';
import { ContactSummary } from '@/types/contact';

import useGetContactList from './hooks/useGetContactList';

import ContactList from '.';

vi.mock('./hooks/useGetContactList', () => ({
  default: vi.fn(),
}));

const mockUseGetContactList = vi.mocked(useGetContactList);

const mockContactList: ContactSummary[] = [
  {
    type: 'training',
    contactId: 2,
    title: '문의 남깁니다.',
    userName: '김철수',
    createdAt: '2024-11-22T12:13:50.777244',
  },
  {
    type: 'etc',
    contactId: 1,
    title: '문의 남겨요',
    userName: 'John',
    createdAt: '2024-11-21T12:08:22.462601',
  },
];

const mockContactListResponse = (
  list = mockContactList,
  totalElements = mockContactList.length,
  isLoading = false,
  isError = false,
) => {
  mockUseGetContactList.mockReturnValueOnce({
    list,
    totalElements,
    isLoading,
    isError,
  });
};

const renderAdminContactPage = () => {
  customRender(
    <MemoryRouter initialEntries={['/admin/contact']}>
      <Routes>
        <Route path='/admin/contact' element={<ContactList />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('관리자 문의 목록 페이지', () => {
  beforeEach(() => {
    mockUseGetContactList.mockReturnValue({
      list: mockContactList,
      totalElements: mockContactListResponse.length,
      isLoading: false,
      isError: false,
    });
  });

  test('문의 데이터가 없을 경우 데이터가 없다는 메시지를 렌더링한다.', () => {
    mockContactListResponse([], 0);
    renderAdminContactPage();

    expect(screen.getByText('데이터가 없습니다.')).toBeInTheDocument();
  });

  test('문의 데이터가 있을 경우 데이터를 올바르게 렌더링한다.', () => {
    renderAdminContactPage();

    expect(screen.getByText('교사 연수 의뢰')).toBeInTheDocument();
    expect(screen.getByText('문의 남깁니다.')).toBeInTheDocument();
    expect(screen.getByText('김철수')).toBeInTheDocument();
    expect(screen.getByText('2024-11-22')).toBeInTheDocument();

    expect(screen.getByText('기타 문의')).toBeInTheDocument();
    expect(screen.getByText('문의 남겨요')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('2024-11-21')).toBeInTheDocument();
  });

  test('테이블 아이템 클릭 시 상세 모달이 열린다.', async () => {
    renderAdminContactPage();

    fireEvent.click(screen.getByText('문의 남깁니다.'));
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
  });
});
