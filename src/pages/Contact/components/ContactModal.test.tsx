import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import contactApi from '@/services/contact';

import ContactModal from './ContactModal';

const user = userEvent.setup();

const windowMock = {
  scrollTo: vi.fn(),
  alert: vi.fn(),
};

Object.assign(global, windowMock);

const changeInputValue = async () => {
  await user.type(screen.getByLabelText('이름'), '김철수');
  await user.type(screen.getByLabelText('연락처'), '01012345678');
  await user.type(screen.getByLabelText('이메일'), 'test@test.com');
  await user.type(screen.getByLabelText('제목'), '문의합니다.');
  await user.type(
    screen.getByLabelText('내용'),
    '강의 의뢰 관련으로 문의합니다.',
  );
};

const clickSubmitButton = async () => {
  await user.click(screen.getByText('보내기'));
};

const renderContactModal = (onClose = vi.fn()) => {
  render(
    <ContactModal
      selected={{ label: '강의 의뢰', type: 'class' }}
      isVisible
      onClose={onClose}
    />,
  );
};

describe('ContactModal', () => {
  test('각 항목을 입력하지 않으면 오류 메시지를 출력한다.', async () => {
    renderContactModal();

    await clickSubmitButton();

    expect(screen.getByText('이름을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('연락처를 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('이메일을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('이름을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('제목을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByText('내용을 입력하세요.')).toBeInTheDocument();
  });

  test('입력한 이메일이 이메일 형식에 맞지 않으면 오류 메시지를 출력한다.', async () => {
    renderContactModal();

    await user.type(screen.getByLabelText('이메일'), 'test@');
    await user.tab();
    expect(
      screen.getByText('올바르지 않은 이메일 형식입니다.'),
    ).toBeInTheDocument();
  });

  test('문의 제출에 성공하면 성공 메시지를 띄운다.', async () => {
    vi.spyOn(contactApi, 'createContact').mockResolvedValueOnce({});
    renderContactModal();

    await changeInputValue();
    await clickSubmitButton();
    expect(window.alert).toHaveBeenCalledWith('문의가 접수되었습니다.');
  });

  test('문의 제출에 실패하면 오류 메시지를 띄운다.', async () => {
    vi.spyOn(contactApi, 'createContact').mockRejectedValueOnce({});
    renderContactModal();

    await changeInputValue();
    await clickSubmitButton();
    expect(window.alert).toHaveBeenCalledWith('문의 등록에 실패했습니다.');
  });

  test('닫기 버튼을 클릭하면 onClose가 실행된다.', async () => {
    const mockOnClose = vi.fn();
    renderContactModal(mockOnClose);

    await user.click(screen.getByRole('button', { name: '닫기' }));
    expect(mockOnClose).toHaveBeenCalledOnce();
  });
});
