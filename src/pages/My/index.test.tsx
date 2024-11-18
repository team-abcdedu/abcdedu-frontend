import { fireEvent, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';

import customRender from '@/__test__/customRender';
import useModal from '@/hooks/useModal';
import { UserInfo } from '@/types/user';

import useGetProfile from './hooks/useGetProfile';

import MyPage from '.';

const mockUserInfo: UserInfo = {
  name: '김철수',
  role: '학생',
  email: 'qwer@test.com',
  school: 'OO학교',
  studentId: 12345,
  imageUrl: 'https://example.com/test.jpg',
  createdAt: '2024-11-12T11:57:03.906822',
  createPostCount: 8,
  createCommentCount: 7,
};

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    Navigate: vi.fn(() => null), // <Navigate /> 모킹
  };
});

vi.mock('@/hooks/useModal', () => ({
  default: vi.fn(),
}));

vi.mock('./hooks/useGetProfile', () => ({
  default: vi.fn(),
}));

const mockUseGetProfile = vi.mocked(useGetProfile);
const mockUseModal = vi.mocked(useModal);
const mockNavigate = vi.mocked(Navigate);

const mockProfileResponse = (user?: UserInfo, isLoading = false) => {
  mockUseGetProfile.mockReturnValueOnce({
    user,
    isLoading,
  });
};

const mockModalReturnValue = (isVisible = false, toggleModal = vi.fn()) => {
  mockUseModal.mockReturnValueOnce({
    isVisible,
    toggleModal,
  });
};

describe('마이페이지', () => {
  // useModal 기본 return 값 설정
  beforeEach(() => {
    mockUseGetProfile.mockReturnValue({
      user: mockUserInfo,
      isLoading: false,
    });
    mockUseModal.mockReturnValue({
      isVisible: false,
      toggleModal: vi.fn(),
    });
  });

  test('로딩중이라면 로딩 컴포넌트를 렌더링한다.', () => {
    mockProfileResponse(undefined, true);
    customRender(<MyPage />);

    const loadingElements = screen.getAllByRole('status');
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  test('로딩중이 아니고 user가 없으면 홈으로 redirect한다.', () => {
    mockProfileResponse(undefined, false);
    customRender(<MyPage />);

    expect(mockNavigate).toHaveBeenCalledWith({ to: '/', replace: true }, {});
  });

  test('user가 존재하면 회원 정보를 렌더링한다.', async () => {
    customRender(<MyPage />);

    // Skeleton이 없어야 한다.
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    // 회원 정보가 렌더링 되어야 한다.
    expect(screen.getByText('계정 생성 일자: 2024-11-12')).toBeInTheDocument();
    expect(screen.getByText('김철수')).toBeInTheDocument();
    expect(screen.getByLabelText('회원 등급')).toHaveTextContent('학생');
    expect(screen.getByLabelText('소속 학교')).toHaveTextContent('OO학교');
    expect(screen.getByLabelText('학번')).toHaveTextContent('12345');
    expect(screen.getByLabelText('이메일')).toHaveTextContent('qwer@test.com');
    expect(screen.getByLabelText('작성한 게시물 수')).toHaveTextContent('8');
    expect(screen.getByLabelText('작성한 댓글 수')).toHaveTextContent('7');
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/test.jpg',
    );
  });

  test('프로필 수정 버튼 클릭 시 toggleProfileModal이 실행되어야 한다.', () => {
    const toggleProfileModal = vi.fn();
    const togglePwModal = vi.fn();

    mockModalReturnValue(false, toggleProfileModal);
    mockModalReturnValue(false, togglePwModal);

    customRender(<MyPage />);

    const editButton = screen.getByText('정보 수정하기');
    fireEvent.click(editButton);

    expect(toggleProfileModal).toHaveBeenCalled();
    expect(togglePwModal).not.toHaveBeenCalled();
  });

  test('비밀번호 변경 버튼 클릭 시 togglePwModal이 실행되어야 한다.', () => {
    const toggleProfileModal = vi.fn();
    const togglePwModal = vi.fn();

    mockModalReturnValue(false, toggleProfileModal);
    mockModalReturnValue(false, togglePwModal);

    customRender(<MyPage />);

    const editButton = screen.getByText('비밀번호 변경');
    fireEvent.click(editButton);

    expect(toggleProfileModal).not.toHaveBeenCalled();
    expect(togglePwModal).toHaveBeenCalled();
  });
});
