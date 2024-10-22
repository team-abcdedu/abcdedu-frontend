import { useNavigate } from 'react-router-dom';

import { removeAccessToken } from '@/libs/api';
import { clearSelectedQueries } from '@/libs/react-query';
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
      resetAuthState();
      resetUser();
      await auth.logout();
      removeAccessToken();
      clearSelectedQueries(['user', 'homework', 'survey']);
      navigate('/');
    } catch (error) {
      console.log('error with logout: ', error);
    }
  };

  return { handleLogout };
}
