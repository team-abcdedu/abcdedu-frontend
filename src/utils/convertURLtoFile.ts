import axios, { AxiosRequestConfig } from 'axios';

export const convertURLtoFile = async (
  url: string,
  filename: string,
  options?: { type?: string; headers?: AxiosRequestConfig['headers'] },
) => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob',
      withCredentials: true,
      headers: options?.headers || {},
    });
    const blob = response.data;
    return new File([blob], filename, { type: options?.type ?? blob.type });
  } catch (error) {
    console.log('파일 변환 실패 : ', error);
    throw error;
  }
};
