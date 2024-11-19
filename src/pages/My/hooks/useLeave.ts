import { useState } from 'react';

import useLogout from '@/hooks/auth/useLogout';
import useModal from '@/hooks/useModal';
import authApi from '@/services/auth';

export default function useLeave({ onSuccess }: { onSuccess: () => void }) {
  const { handleLogout } = useLogout();

  const { isVisible, toggleModal } = useModal();
  const [messageModalType, setMessageModalType] = useState<'success' | 'error'>(
    'success',
  );
  const [resultMessage, setResultMessage] = useState('');

  const handleLeaveClick = async () => {
    try {
      await authApi.deleteAccount();
      setMessageModalType('success');
      setResultMessage(
        '회원 탈퇴가 완료되었습니다.\n이용해 주셔서 감사합니다.',
      );
    } catch (error) {
      console.log(error);
      setMessageModalType('error');
      setResultMessage('회원 탈퇴에 실패했습니다.');
    } finally {
      toggleModal();
    }
  };

  const handleMessageModalClose = () => {
    toggleModal();
    onSuccess();
    handleLogout();
  };

  return {
    handleLeaveClick,
    isMessageModalVisible: isVisible,
    messageModalType,
    resultMessage,
    handleMessageModalClose,
  };
}
