import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/libs/react-query';
import AdminClassApi from '@/services/admin/class';

interface UseFileUploadProps {
  subLectureId: number;
}

function useFileUploadMutation({ subLectureId }: UseFileUploadProps) {
  const mutation = useMutation({
    mutationFn: (data: { type: string; file: File }) =>
      AdminClassApi.uploadGeneralFile({ ...data, subLectureId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['class', 'sub-class-file-list', subLectureId],
      });
    },
  });

  return { mutation };
}

export default useFileUploadMutation;
