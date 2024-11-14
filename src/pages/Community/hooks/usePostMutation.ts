import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { ApiError } from '@/libs/errors';
import communityApi from '@/services/community';

interface UsePostMutationProps {
  category: string;
  postId?: number;
}

export default function usePostMutation({
  category,
  postId,
}: UsePostMutationProps) {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const handleAPIError = (error: Error) => {
    if (error instanceof ApiError) console.log(error.message);
    else console.log(error);
  };

  const createPost = useMutation({
    mutationFn: (form: FormData) => communityApi.createPost(form),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['board', 'list', category],
      });
      navigate(`/community/${category}/${data}`);
    },
    onError: error => {
      handleAPIError(error);
      alert('게시글 등록에 실패했습니다.');
    },
  });

  const updatePost = useMutation({
    mutationFn: ({ id, form }: { id: number; form: FormData }) =>
      communityApi.updatePost(id, form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['board', 'list', category],
      });
      if (postId) {
        queryClient.invalidateQueries({
          queryKey: ['board', postId],
        });
      }
    },
    onError: error => {
      handleAPIError(error);
      alert('게시글 수정에 실패했습니다.');
    },
  });

  const deletePost = useMutation({
    mutationFn: (id: number) => communityApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board', 'list', category] });
      navigate(`/community/${category}`);
    },
    onError: error => {
      handleAPIError(error);
      alert('게시글 삭제에 실패했습니다.');
    },
  });

  return { createPost, updatePost, deletePost };
}
