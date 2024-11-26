import { useQuery } from '@tanstack/react-query';

import AdminSurveyApi from '@/services/admin/survey';

interface UseSurveyRepliesProps {
  surveyId: number | null;
}

function useSurveyReplies({ surveyId }: UseSurveyRepliesProps) {
  const {
    data: surveyReplies,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => AdminSurveyApi.getSurveyReplies({ surveyId: surveyId || 1 }),
    queryKey: ['admin', 'survey', 'replies', surveyId],
    enabled: !!surveyId,
  });

  return { surveyReplies, isError, isLoading };
}

export default useSurveyReplies;
