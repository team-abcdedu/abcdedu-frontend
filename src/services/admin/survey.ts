import { get } from '@/libs/api';
import { SurveyReplies } from '@/types/survey';

class AdminSurveyApi {
  static async getSurveyReplies({ surveyId }: { surveyId: number }) {
    return get<SurveyReplies>(`/admin/surveys/${surveyId}/replies`);
  }
}

export default AdminSurveyApi;
