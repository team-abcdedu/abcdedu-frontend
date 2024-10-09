import * as Sentry from '@sentry/react';
import axios from 'axios';
import memoize from 'memoize';

import { BASE_URL } from '@/config';
import { clearSelectedQueries } from '@/libs/react-query';
import useBoundStore from '@/stores';

import { ApiError } from './errors';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000,
  withCredentials: true,
});

export const setAccessToken = (accessToken: string) => {
  instance.defaults.headers.authorization = `Bearer ${accessToken}`;
};

export const removeAccessToken = () => {
  delete instance.defaults.headers.authorization;
};

const getAccessToken = () => {
  return instance.defaults.headers.authorization;
};

const logout = async () => {
  const { resetAuthState, resetUser } = useBoundStore.getState();
  resetAuthState();
  resetUser();
  clearSelectedQueries(['user', 'homework', 'survey']);

  await axios.delete('/auth/logout', {
    baseURL: BASE_URL,
    withCredentials: true,
  });
  removeAccessToken();
};

// access token 재발급
const reissueAccessToken = memoize(
  async (): Promise<string> => {
    try {
      const { data } = await axios.get('/auth/reissue', {
        baseURL: BASE_URL,
        withCredentials: true,
      });

      const newToken = data.result.accessToken;
      return newToken;
    } catch (refreshError) {
      // 토큰 재발급 실패 시 로그아웃 처리
      await logout();
      return Promise.reject(refreshError);
    }
  },
  // 2초 동안 캐시
  { maxAge: 2000 },
);

// Request interceptor
instance.interceptors.request.use(async config => {
  const { isAutoLogin, user } = useBoundStore.getState();
  const accessToken = getAccessToken();

  // 로그인한 유저가 아닌 경우
  if (!isAutoLogin) {
    // isAutoLogin이 false이면서 user가 있는 경우(local storage에 user 정보가 남아있는 경우)
    if (user) {
      await logout();
    }
    return config;
  }

  // 로그인한 유저의 access token 없을 때
  if (!accessToken) {
    const reissuedToken = await reissueAccessToken();
    setAccessToken(reissuedToken);
  }
  const configWithToken = { ...config };
  configWithToken.headers.authorization = getAccessToken();
  return configWithToken;
});

// Response interceptor
instance.interceptors.response.use(
  response => {
    const { result } = response.data;

    return result;
  },
  async error => {
    if (!error.response) {
      const requestUrl = error.config?.url || 'URL 정보 없음';
      Sentry.withScope(scope => {
        scope.setLevel('error');
        scope.setContext(
          'Request Url',
          error.config?.url || 'URL 정보 가져올 수 없음',
        );
        scope.setTag('error type', 'Network Error');
        Sentry.captureMessage(
          `[Network Error] /api/v1${requestUrl} \n${error.message ?? `네트워크 오류`}`,
        );
      });
      return Promise.reject(error);
    }

    const { isAutoLogin } = useBoundStore.getState();
    const { status, data } = error.response;

    // 관리자 페이지 내 조회 요청 권한 오류 (403)
    if (status === 403) {
      const { errorCode } = data.result;
      if (errorCode === 'ADMIN_VALID_PERMISSION') window.location.href = '/';
    }

    if (status === 401 && isAutoLogin) {
      // isAutoLogin: 로그인 하지 않은 사용자의 토큰 재발급 요청을 방지합니다.
      const originalRequest = error.config;

      const newToken = await reissueAccessToken();
      setAccessToken(newToken);
      originalRequest.headers.authorization = getAccessToken();

      // 이전 요청 재요청
      return instance(originalRequest);
    }

    if (data && data.result && status >= 400 && status < 500) {
      const { message, errorCode } = data.result;
      return Promise.reject(
        new ApiError(message ?? 'API Error', status, errorCode),
      );
    }

    // 401, 403, 409 제외한 4~500번대 오류 로깅
    // 400번대 오류는 응답이 ApiError 구조가 아닌 경우(예기치 못한 오류인 경우)에만 로깅됩니다.
    if (status >= 400 && ![401, 403, 409].includes(status)) {
      const isServerError = status >= 500;
      const errorType = isServerError ? 'Server Error' : 'Api Error';
      Sentry.withScope(scope => {
        scope.setLevel('error');
        scope.setTag('error type', errorType);
        Sentry.captureMessage(
          `[${errorType}] /api/v1${error.config.url} \n${error.message}`,
        );
      });
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
