import { useMutation, useQueryClient } from '@tanstack/react-query';

import AdminClassApi from '@/services/admin/class';

interface UseGeneralFileUpdateProps {
  assignmentFileId: number;
}

function useGeneralFileUpdate({ assignmentFileId }: UseGeneralFileUpdateProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { assignmentFileId: number; file: File }) =>
      AdminClassApi.updateGeneralFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['sub-class-file-list', assignmentFileId],
      });
      alert('파일 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('파일 수정에 실패했습니다.');
    },
  });

  return { mutation };
}

export default useGeneralFileUpdate;
