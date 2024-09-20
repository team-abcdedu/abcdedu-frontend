import { get, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
import { SurveyAnswer, SurveyInfo, SurveySummary } from '@/types/survey';

class SurveyApi {
  static async getSurveyList({
    page,
    size,
    sortBy,
    sortDirection,
  }: {
    page: number;
    size: number;
    sortBy: string;
    sortDirection: 'asc' | 'desc';
  }) {
    return get<PaginatedResponse<SurveySummary>>(
      `/surveys?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
    );
  }

  static async getSurvey({ surveyId }: { surveyId: number }) {
    return get<SurveyInfo>(`/surveys/${surveyId}`);
  }

  static async postSurvey({
    surveyId,
    answers,
  }: {
    surveyId: number;
    answers: SurveyAnswer[];
  }) {
    return post(`/surveys/${surveyId}/replies`, answers);
  }
}

export default SurveyApi;
