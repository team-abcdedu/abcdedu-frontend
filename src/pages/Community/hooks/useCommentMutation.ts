import { useMutation, useQueryClient } from '@tanstack/react-query';

import communityApi from '@/services/community';

export default function useCommentMutation({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const createComment = useMutation({
    mutationFn: (content: string) =>
      communityApi.createComment(postId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      alert('오류가 발생했습니다.');
      console.log(error);
    },
  });

  const updateComment = useMutation({
    mutationFn: ({
      commentId,
      content,
    }: {
      commentId: number;
      content: string;
    }) => communityApi.updateComment(commentId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      alert('오류가 발생했습니다.');
      console.log(error);
    },
  });

  const deleteComment = useMutation({
    mutationFn: (commentId: number) =>
      communityApi.deleteComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      alert('오류가 발생했습니다.');
      console.log(error);
    },
  });

  return { createComment, updateComment, deleteComment };
}
