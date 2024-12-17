import { useMutation, useQueryClient } from '@tanstack/react-query';

import communityApi from '@/services/community';

export default function useCommentMutation({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const createComment = useMutation({
    mutationFn: (form: FormData) => communityApi.createComment(postId, form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      alert('댓글 작성 중 오류가 발생했습니다.');
      console.log(error);
    },
  });

  const updateComment = useMutation({
    mutationFn: ({ commentId, form }: { commentId: number; form: FormData }) =>
      communityApi.updateComment(commentId, form),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: error => {
      alert('댓글 수정 중 오류가 발생했습니다.');
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
      alert('댓글 삭제 중 오류가 발생했습니다.');
      console.log(error);
    },
  });

  return { createComment, updateComment, deleteComment };
}
