import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';

interface UseFileUploadProps {
  subClassId: number;
}

function useFileUploadMutation({ subClassId }: UseFileUploadProps) {
  const mutation = useMutation({
    mutationFn: (data: { type: string; file: File }) =>
      AdminClassApi.uploadSubClassFile({ ...data, subClassId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-file-list', subClassId],
      });
    },
  });

  return { mutation };
}

export default useFileUploadMutation;
