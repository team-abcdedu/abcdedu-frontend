import { screen } from '@testing-library/react';

import customRender from '@/__test__/customRender';
import { Contact } from '@/types/contact';

import useGetContact from '../hooks/useGetContact';

import ContactDetailModal from './ContactDetailModal';

const windowMock = {
  scrollTo: vi.fn(),
  alert: vi.fn(),
};

Object.assign(global, windowMock);

const mockContactInfo: Contact = {
  type: 'class',
  contactId: 1,
  title: '문의합니다.',
  userName: '김철수',
  phoneNumber: '01012345678',
  email: 'test@test.com',
  content: '강의 관련해서 문의합니다.',
  createdAt: '2024-11-21T04:13:07.85207',
};

vi.mock('../hooks/useGetContact', () => ({
  default: vi.fn(),
}));

const mockUseContact = vi.mocked(useGetContact);

const mockContactResponse = (
  contactInfo: Contact = mockContactInfo,
  isLoading = false,
  isError = false,
) => {
  mockUseContact.mockReturnValueOnce({
    data: contactInfo,
    isError,
    isLoading,
  });
};

const renderContactDetailModal = (id: number | null = 1, onClose = vi.fn()) => {
  return customRender(
    <ContactDetailModal id={id} isVisible onClose={onClose} />,
  );
};

describe('ContactDetailModal', () => {
  test('문의 id가 null이면 null을 반환한다.', () => {
    mockContactResponse(undefined, false, true);
    const { container } = renderContactDetailModal(null);

    expect(container.firstChild).toBeNull();
  });

  test('문의 조회에 실패하면 오류 메시지를 띄우고 모달을 닫는다.', () => {
    const mockOnClose = vi.fn();
    mockContactResponse(undefined, false, true);
    renderContactDetailModal(1, mockOnClose);

    expect(window.alert).toHaveBeenCalledWith(
      '문의 내용을 불러오는 중 오류가 발생했습니다.',
    );
    expect(mockOnClose).toHaveBeenCalledOnce();
  });

  test('로딩중이면 로딩 컴포넌트를 렌더링한다.', () => {
    mockContactResponse(undefined, true, false);
    renderContactDetailModal();

    const loadingElements = screen.getAllByRole('status');
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  test('문의 조회에 성공하면 문의 상세 정보를 렌더링한다.', () => {
    mockContactResponse();
    renderContactDetailModal();

    expect(screen.getByText('강의 의뢰')).toBeInTheDocument();
    expect(screen.getByText('김철수')).toBeInTheDocument();
    expect(screen.getByText('01012345678')).toBeInTheDocument();
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
    expect(screen.getByText('2024-11-21')).toBeInTheDocument();
    expect(screen.getByText('문의합니다.')).toBeInTheDocument();
    expect(screen.getByText('강의 관련해서 문의합니다.')).toBeInTheDocument();
  });
});
