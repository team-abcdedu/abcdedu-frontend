import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import userApi from '@/services/user';

import PasswordModal from './PasswordModal';

const user = userEvent.setup();

const windowMock = {
  scrollTo: vi.fn(),
  alert: vi.fn(),
};

Object.assign(global, windowMock);

describe('PasswordModal', () => {
  test('비밀번호가 6자보다 적거나 20자보다 많으면 오류 메시지를 보여준다.', async () => {
    render(<PasswordModal isVisible onClose={vi.fn()} />);
    const newPasswordInput = screen.getByLabelText('새 비밀번호');

    await user.type(newPasswordInput, 'qwert');
    expect(
      screen.getByText('비밀번호는 최소 6자 이상이어야 합니다.'),
    ).toBeInTheDocument();

    await user.type(newPasswordInput, 'asdfzxcv12345678');
    expect(
      screen.getByText('비밀번호는 최대 20자까지 입력할 수 있습니다.'),
    ).toBeInTheDocument();
  });

  test('비밀번호 확인이 비밀번호와 일치하지 않으면 오류 메시지를 보여준다.', async () => {
    render(<PasswordModal isVisible onClose={vi.fn()} />);
    const newPasswordInput = screen.getByLabelText('새 비밀번호');
    const confirmPasswordInput = screen.getByLabelText('새 비밀번호 확인');

    await user.type(newPasswordInput, 'qwerty');
    expect(
      screen.queryByText('비밀번호는 최소 6자 이상이어야 합니다.'),
    ).not.toBeInTheDocument();

    await user.type(confirmPasswordInput, 'qwertx');
    expect(
      screen.getByText('비밀번호가 일치하지 않습니다.'),
    ).toBeInTheDocument();
  });

  test('비밀번호 변경에 성공하면 성공 메시지를 띄우고 onClose가 실행된다.', async () => {
    const mockOnClose = vi.fn();
    vi.spyOn(userApi, 'updatePassword').mockResolvedValueOnce({}); // 성공 응답 모킹

    render(<PasswordModal isVisible onClose={mockOnClose} />);

    const newPasswordInput = screen.getByLabelText('새 비밀번호');
    const confirmPasswordInput = screen.getByLabelText('새 비밀번호 확인');

    await user.type(newPasswordInput, 'qwerty');
    await user.type(confirmPasswordInput, 'qwerty');

    const saveButton = screen.getByText('변경사항 저장');
    await user.click(saveButton);

    expect(window.alert).toHaveBeenCalledWith('비밀번호가 변경되었습니다.');
    expect(mockOnClose).toHaveBeenCalledOnce();
  });

  test('비밀 번호 변경에 실패하면 오류 메시지를 띄운다.', async () => {
    vi.spyOn(userApi, 'updatePassword').mockRejectedValueOnce({}); // 실패 응답 모킹

    render(<PasswordModal isVisible onClose={vi.fn()} />);

    const newPasswordInput = screen.getByLabelText('새 비밀번호');
    const confirmPasswordInput = screen.getByLabelText('새 비밀번호 확인');

    await user.type(newPasswordInput, 'qwerty');
    await user.type(confirmPasswordInput, 'qwerty');

    const saveButton = screen.getByText('변경사항 저장');
    await user.click(saveButton);

    expect(window.alert).toHaveBeenCalledWith('비밀번호 변경에 실패했습니다.');
  });

  test('취소 또는 닫기 버튼을 클릭하면 onClose가 실행된다.', async () => {
    const mockOnClose = vi.fn();
    render(<PasswordModal isVisible onClose={mockOnClose} />);

    const cancelButton = screen.getByText('취소');
    await user.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledOnce();

    mockOnClose.mockClear();

    const closeButton = screen.getByRole('button', { name: '닫기' });
    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledOnce();
  });
});
