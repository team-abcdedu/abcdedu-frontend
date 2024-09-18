import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

import AdminClassApi from '@/services/admin/class';

interface UseGeneralFileUpdateProps {
  assignmentFileId: number;
  setGeneralFile: Dispatch<SetStateAction<File | null>>;
}

function useGeneralFileUpdate({
  assignmentFileId,
  setGeneralFile,
}: UseGeneralFileUpdateProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { assignmentFileId: number; file: File }) =>
      AdminClassApi.updateGeneralFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['sub-class-file-list', assignmentFileId],
      });
      alert('파일 수정이 완료되었습니다.');
      setGeneralFile(null);
    },
    onError: () => {
      alert('파일 수정에 실패했습니다.');
    },
  });

  return { mutation };
}

export default useGeneralFileUpdate;
