import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import userApi from '@/services/user';

export default function useLevelUpMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (postId: number) => userApi.upgradeMembership(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board', 'list', 4] });
      alert('등업이 완료되었습니다.');
      navigate('/community/levelup');
    },
    onError: () => {
      alert('오류가 발생했습니다.');
    },
  });
}
