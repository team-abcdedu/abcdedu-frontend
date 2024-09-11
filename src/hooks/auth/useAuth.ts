import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import userApi from '@/services/user';
import useBoundStore from '@/stores';

export default function useAuth() {
  const { isAutoLogin, setUser } = useBoundStore(state => ({
    isAutoLogin: state.isAutoLogin,
    setUser: state.setUser,
  }));

  // useAuth가 사용되는 컴포넌트가 mount 될 때만 호출됩니다.
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => userApi.getNameAndRole(),
    enabled: Boolean(isAutoLogin), // access token이 존재할 때만 호출
  });

  useEffect(() => {
    if (data && isAutoLogin) {
      setUser(data);
      // console.log('user data fetched'); // 확인용, 추후 제거
    }
  }, [data, setUser, isAutoLogin]);
}
