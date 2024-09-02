import axios from 'axios';

import { BASE_URL } from '@/config';
import useBoundStore from '@/stores';

const instance = axios.create({
  baseURL: BASE_URL,
  // baseURL: '/api/v1',
  timeout: 3 * 1000,
  withCredentials: true,
});

// Request interceptor
instance.interceptors.request.use(config => {
  const { accessToken } = useBoundStore.getState();
  if (accessToken) {
    const configWithToken = { ...config };
    configWithToken.headers.authorization = accessToken;
    return configWithToken;
  }
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  response => {
    const { result } = response.data;
    if (result && result.accessToken) {
      // console.log('====토큰====', result.accessToken);
      useBoundStore.setState({ accessToken: result.accessToken });
    }

    return result;
  },
  async error => {
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
