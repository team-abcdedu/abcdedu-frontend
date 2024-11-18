import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import customRender from '@/__test__/customRender';
import { mockSelectFile } from '@/__test__/mockSelectFile';
import * as Compressor from '@/libs/compressor';
import userApi from '@/services/user';
import { UserInfo } from '@/types/user';

import ProfileModal from './ProfileModal';

const user = userEvent.setup();

const windowMock = {
  scrollTo: vi.fn(),
  alert: vi.fn(),
};

Object.assign(global, windowMock);

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

vi.mock('@/utils/convertURLtoFile', () => ({
  convertURLtoFile: vi.fn(() =>
    Promise.resolve(
      new File(['dummy content'], 'test-image.webp', {
        type: 'image/webp',
      }),
    ),
  ),
}));

vi.mock('@/libs/compressor');

const renderProfileModal = (userProps = mockUserInfo, onClose = vi.fn()) => {
  customRender(<ProfileModal user={userProps} isVisible onClose={onClose} />);
};

const changeInputValue = async (label: string, value?: string) => {
  const input = screen.getByLabelText(label);
  await user.clear(input);
  if (value) await user.type(input, value);
};

const clickButton = async (buttonText: string, type = 'text') => {
  const button =
    type === 'label'
      ? screen.getByLabelText(buttonText)
      : screen.getByRole('button', { name: buttonText });

  await user.click(button);
};

describe('ProfileModal', () => {
  test('이름, 학교, 학번, 프로필 이미지가 렌더링 되어야 한다.', () => {
    renderProfileModal();

    expect(screen.getByLabelText('이름')).toHaveValue('김철수');
    expect(screen.getByLabelText('소속 학교')).toHaveValue('OO학교');
    expect(screen.getByLabelText('학번')).toHaveValue(12345);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://example.com/test.jpg',
    );
  });

  test('이름을 입력하지 않으면 오류 메시지를 렌더링한다.', async () => {
    renderProfileModal();

    await changeInputValue('이름');
    expect(screen.getByText('이름을 입력하세요.')).toBeInTheDocument();
  });

  test('이름, 소속 학교의 글자수가 10자보다 많으면 오류 메시지를 렌더링한다.', async () => {
    renderProfileModal();

    await changeInputValue('이름', '김철수김철수김철수김철');
    expect(
      screen.getByText('이름은 최대 10자까지 입력할 수 있습니다.'),
    ).toBeInTheDocument();

    await changeInputValue('소속 학교', 'OOOOOOOO고등학교');
    expect(
      screen.getByText('학교는 최대 10자까지 입력할 수 있습니다.'),
    ).toBeInTheDocument();
  });

  test('첨부한 이미지 파일이 2MB를 초과하면 오류 메시지를 띄운다.', async () => {
    renderProfileModal({ ...mockUserInfo, imageUrl: '' });

    // 5MB 이미지 파일 업로드 모의
    const { select } = mockSelectFile(undefined, undefined, undefined, 5);
    await select();
    expect(window.alert).toHaveBeenCalledWith(
      '이미지 파일의 크기는 2MB를 초과할 수 없습니다.',
    );
  });

  test('이미지 삭제 버튼을 누르면 미리보기 이미지가 삭제된다.', async () => {
    renderProfileModal();
    expect(screen.queryByRole('img')).toBeInTheDocument();

    await clickButton('프로필 이미지 삭제', 'label');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('이미지 압축 및 첨부에 성공하면 미리보기 이미지를 보여준다.', async () => {
    vi.spyOn(Compressor, 'compressImage').mockResolvedValueOnce(
      new File(['dummy content'], 'compressed-image.webp', {
        type: 'image/webp',
      }),
    );

    renderProfileModal({ ...mockUserInfo, imageUrl: '' });

    const { select } = mockSelectFile();
    await select();
    expect(screen.getByRole('img').getAttribute('src')).toBeTruthy();
  });

  test('이미지 압축에 실패하면 오류 메시지를 띄운다.', async () => {
    vi.spyOn(Compressor, 'compressImage').mockRejectedValueOnce({});

    renderProfileModal({ ...mockUserInfo, imageUrl: '' });

    const { select } = mockSelectFile();
    await select();
    expect(window.alert).toHaveBeenCalledWith('이미지 압축에 실패했습니다.');
  });

  test('프로필 수정에 성공하면 성공 메시지를 띄운다.', async () => {
    vi.spyOn(userApi, 'updateUserInfo').mockResolvedValueOnce({});

    const mockOnClose = vi.fn();
    renderProfileModal(mockUserInfo, mockOnClose);

    await changeInputValue('소속 학교', '새로운학교');
    await clickButton('변경사항 저장');

    expect(window.alert).toHaveBeenCalledWith('수정이 완료되었습니다.');
    expect(mockOnClose).toHaveBeenCalledOnce();
  });

  test('프로필 수정에 실패하면 오류 메시지를 띄운다.', async () => {
    vi.spyOn(userApi, 'updateUserInfo').mockRejectedValueOnce({});

    renderProfileModal();

    await changeInputValue('소속 학교', '새로운학교');
    await clickButton('변경사항 저장');

    expect(window.alert).toHaveBeenCalledWith('프로필 수정에 실패했습니다.');
  });

  test('취소 또는 닫기 버튼을 클릭하면 onClose가 실행된다.', async () => {
    const mockOnClose = vi.fn();
    renderProfileModal(mockUserInfo, mockOnClose);

    await clickButton('취소');
    expect(mockOnClose).toHaveBeenCalledOnce();

    mockOnClose.mockClear();

    await clickButton('닫기', 'name');
    expect(mockOnClose).toHaveBeenCalledOnce();
  });
});
