import { useMutation } from '@tanstack/react-query';

import HomeworkApi from '@/services/homework';
import { IHomeworkForm } from '@/types/homework';

interface UseHomeworkMutationProps {
  homeworkId: number;
}

function useHomeworkMutation({ homeworkId }: UseHomeworkMutationProps) {
  const mutation = useMutation({
    mutationFn: (data: IHomeworkForm) => {
      const refinedData = Object.values(data).map(v => {
        return { answer: v };
      });
      return HomeworkApi.postHomework({ homeworkId, answers: refinedData });
    },
  });
  return { mutation };
}

export default useHomeworkMutation;
