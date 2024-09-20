import { Link } from 'react-router-dom';

import AccessError from '@/components/AccessError';
import useGetSurvey from '@/hooks/survey/useGetSurvey';
import SurveyFormBody from '@/pages/Survey/components/SurveyFormBody';
import SurveyFormHeader from '@/pages/Survey/components/SurveyFormHeader';
import useSurveyForm from '@/pages/Survey/hooks/useSurveyForm';

interface SurveyFormProps {
  surveyId: number;
}

function SurveyForm({ surveyId }: SurveyFormProps) {
  const {
    data: survey,
    isError,
    isLoading,
    errorCode,
  } = useGetSurvey({ surveyId });

  const { register, errors, onSubmit } = useSurveyForm({
    surveyId,
  });

  if (errorCode) {
    return (
      <AccessError
        type={'설문'}
        errorCode={errorCode}
        linkUrl={'/survey'}
        linkString={'설문 목록으로'}
      />
    );
  }

  if (isError || isLoading) {
    return (
      <div
        className={
          'w-full h-[500px] flex-col-center gap-10 text-center text-18'
        }
      >
        {isError ? '에러가 발생했습니다.' : '로딩중...'}
        {isError && (
          <Link
            to='/survey'
            className='px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
          >
            설문 목록으로
          </Link>
        )}
      </div>
    );
  }

  if (!survey) return null;

  return (
    <form onSubmit={onSubmit} className={'w-full'}>
      <SurveyFormHeader title={survey.title} description={survey.description} />

      <SurveyFormBody
        questions={survey.questionGetResponses}
        register={register}
        errors={errors}
      />
    </form>
  );
}

export default SurveyForm;
