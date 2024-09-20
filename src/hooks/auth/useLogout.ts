import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import auth from '@/services/auth';
import useBoundStore from '@/stores';

export default function useLogout() {
  const queryClient = useQueryClient();

  const { resetAuthState, resetUser } = useBoundStore(state => ({
    resetAuthState: state.resetAuthState,
    resetUser: state.resetUser,
  }));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.logout();
      navigate('/');
      resetAuthState();
      resetUser();
      queryClient.removeQueries({ queryKey: ['user'] });
    } catch (error) {
      console.log('error with logout: ', error);
    }
  };

  return { handleLogout };
}
