import axios from 'axios';
import memoize from 'memoize';

import { BASE_URL } from '@/config';
import useBoundStore from '@/stores';

import { queryClient } from './react-query';

// access token 재발급
const reissueAccessToken = memoize(
  async (): Promise<string> => {
    try {
      const { data } = await axios.get('/auth/reissue', {
        baseURL: BASE_URL,
      });

      const newToken = data.result.accessToken;
      return newToken;
    } catch (refreshError) {
      // 토큰 재발급 실패 시 로그아웃 처리
      const { resetAuthState, resetUser } = useBoundStore.getState();
      resetAuthState();
      resetUser();
      await axios.delete('/auth/logout', {
        baseURL: BASE_URL,
      });
      queryClient.removeQueries({ queryKey: ['user'] });
      return Promise.reject(refreshError);
    }
  },
  // 2초 동안 캐시
  { maxAge: 2000 },
);

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000,
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use(config => {
  const { accessToken } = useBoundStore.getState();
  if (accessToken) {
    const configWithToken = { ...config };
    configWithToken.headers.authorization = `Bearer ${accessToken}`;
    return configWithToken;
  }
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  response => {
    const { result } = response.data;
    if (result && result.accessToken) {
      useBoundStore.setState({ accessToken: result.accessToken });
    }

    return result;
  },
  async error => {
    const { isAutoLogin } = useBoundStore.getState();
    console.log(error.response);

    // 관리자 페이지 내 조회 요청 권한 오류 (403)
    if (error.response?.status === 403) {
      const { data } = error.response;
      const { errorCode } = data.result;
      if (errorCode === 'ADMIN_VALID_PERMISSION') window.location.href = '/';
    }

    if (error.response?.status === 401 && isAutoLogin) {
      // isAutoLogin: 로그인 하지 않은 사용자의 토큰 재발급 요청을 방지합니다.
      const originalRequest = error.config;

      const newToken = await reissueAccessToken();
      useBoundStore.setState({ accessToken: newToken });
      originalRequest.headers.authorization = `Bearer ${newToken}`;

      // 이전 요청 재요청
      return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
