import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import userApi from '@/services/user';

export default function useProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: FormData) => userApi.updateUserInfo(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
    onError: error => {
      if (isAxiosError(error) && error.response?.status) {
        const { status } = error.response;
        if (status === 400) alert('잘못된 요청');
      }
      console.log(error);
    },
  });
}
