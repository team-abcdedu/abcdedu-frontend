import axios from 'axios';

import { BASE_URL } from '@/config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000,
  // withCredentials: true,
  // 현재 be에서 Access-Control-Allow-Origin 값을 *(와일드카드)로 설정해두었기 때문에
  // withCredentials 사용이 불가능합니다. (오류 발생)
  // 추후 be 세팅 변경 후 변경 예정
});

// Request interceptor
instance.interceptors.request.use(config => {
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  response => {
    return response.data.result;
  },
  error => {
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
