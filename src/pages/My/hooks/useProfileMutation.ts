import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ApiError } from '@/libs/errors';
import userApi from '@/services/user';

export default function useProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form: FormData) => userApi.updateUserInfo(form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      if (error instanceof ApiError) console.log(error.message);
      else console.log(error);
      alert('프로필 수정에 실패했습니다.');
    },
  });
}
