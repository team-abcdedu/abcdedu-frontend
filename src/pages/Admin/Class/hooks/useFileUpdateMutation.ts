import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';

interface UseFileUpdateMutationProps {
  subClassId: number;
  fileId: number;
}

function useFileUpdateMutation({
  subClassId,
  fileId,
}: UseFileUpdateMutationProps) {
  const mutation = useMutation({
    mutationFn: (data: { fileId: number; file: File }) =>
      AdminClassApi.updateSubClassFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-general-file', fileId],
      });
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-file-list', subClassId],
      });
    },
  });

  return { mutation };
}

export default useFileUpdateMutation;
