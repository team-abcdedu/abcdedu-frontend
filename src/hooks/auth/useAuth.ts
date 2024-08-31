import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import userApi from '@/services/user';
import useBoundStore from '@/stores';

export default function useAuth() {
  const { isAutoLogin, user, setUser } = useBoundStore(state => ({
    isAutoLogin: state.isAutoLogin,
    user: state.user,
    setUser: state.setUser,
  }));

  // useAuth가 사용되는 컴포넌트가 mount 될 때만 호출됩니다.
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => userApi.getNameAndRole(),
    enabled: Boolean(isAutoLogin), // access token이 존재할 때만 호출
  });

  useEffect(() => {
    if (data && data !== user && isAutoLogin) {
      // 새로운 사용자 데이터가 기존 데이터와 다를 때만 업데이트
      setUser(data);
      // console.log('user data fetched'); // 확인용, 추후 제거
    }
  }, [data, setUser, user, isAutoLogin]);
}
