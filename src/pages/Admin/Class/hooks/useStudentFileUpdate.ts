import { useMutation, useQueryClient } from '@tanstack/react-query';

import AdminClassApi from '@/services/admin/class';

interface UseStudentFileUpdateProps {
  assignmentAnswerFileId: number;
}

function useStudentFileUpdate({
  assignmentAnswerFileId,
}: UseStudentFileUpdateProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { assignmentAnswerFileId: number; file: File }) =>
      AdminClassApi.updateStudentFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['sub-class-student-file', assignmentAnswerFileId],
      });
      alert('파일 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('파일 수정에 실패했습니다.');
    },
  });

  return { mutation };
}

export default useStudentFileUpdate;
