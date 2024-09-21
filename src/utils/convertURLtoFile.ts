import axios from 'axios';

export const convertURLtoFile = async (url: string) => {
  const response = await axios.get(url, {
    responseType: 'blob',
    withCredentials: true,
  });
  const blob = response.data;
  return new File([blob], 'profile-image', { type: blob.type });
};
