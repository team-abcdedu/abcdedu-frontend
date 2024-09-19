import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import communityApi from '@/services/community';

import { boardMetaData, Category } from '../constants/communityInfo';

interface UsePostMutationProps {
  category: string;
  postId?: number;
}

export default function usePostMutation({
  category,
  postId,
}: UsePostMutationProps) {
  const queryClient = useQueryClient();

  const boardId = boardMetaData[category as Category].id;
  const navigate = useNavigate();

  const handleAPIError = (error: Error) => {
    if (isAxiosError(error) && error.response?.status) {
      const { status } = error.response;
      if (status >= 400) {
        const {
          result: { message },
        } = error.response.data;
        alert(message);
      }
    }
    console.log(error);
  };

  const createPost = useMutation({
    mutationFn: (form: FormData) => communityApi.createPost(form),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['board', 'list', boardId],
      });
      navigate(`/community/${category}/${data}`);
    },
    onError: error => {
      handleAPIError(error);
    },
  });

  const updatePost = useMutation({
    mutationFn: ({ id, form }: { id: number; form: FormData }) =>
      communityApi.updatePost(id, form),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['board', 'list', boardId],
      });
      if (postId) {
        queryClient.invalidateQueries({
          queryKey: ['board', postId],
        });
      }
    },
    onError: error => {
      handleAPIError(error);
    },
  });

  const deletePost = useMutation({
    mutationFn: (id: number) => communityApi.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board', 'list', boardId] });
      navigate(`/community/${category}`);
    },
    onError: error => {
      handleAPIError(error);
    },
  });

  return { createPost, updatePost, deletePost };
}
