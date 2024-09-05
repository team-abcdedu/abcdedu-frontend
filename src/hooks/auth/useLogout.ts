import { useNavigate } from 'react-router-dom';

import auth from '@/services/auth';
import useBoundStore from '@/stores';

export default function useLogout() {
  const { resetAuthState, resetUser } = useBoundStore(state => ({
    resetAuthState: state.resetAuthState,
    resetUser: state.resetUser,
  }));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.logout();
      resetAuthState();
      resetUser();
      navigate('/');
    } catch (error) {
      console.log('error with logout: ', error);
    }
  };

  return { handleLogout };
}
