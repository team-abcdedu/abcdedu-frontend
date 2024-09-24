import axios from 'axios';

export const convertURLtoFile = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob',
      withCredentials: true,
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    const blob = response.data;
    return new File([blob], 'profile-image', { type: blob.type });
  } catch (error) {
    console.log('파일 변환 실패 : ', error);
    throw error;
  }
};
