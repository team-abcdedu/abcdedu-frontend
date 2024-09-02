import { useNavigate } from 'react-router-dom';

import useBoundStore from '@/stores';

export default function useLogout() {
  const { resetAuthState, resetUser } = useBoundStore(state => ({
    resetAuthState: state.resetAuthState,
    resetUser: state.resetUser,
  }));

  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO 쿠키 삭제 요청
    // TODO 성공 시에만 client 토큰 및 사용자 정보 초기화 하도록 수정
    resetAuthState();
    resetUser();
    navigate('/');
  };

  return { handleLogout };
}
