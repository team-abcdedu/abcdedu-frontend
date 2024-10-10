import { Link } from 'react-router-dom';

import useGetSurvey from '@/hooks/survey/useGetSurvey';
import SurveyFormBody from '@/pages/Survey/components/SurveyFormBody';
import SurveyFormHeader from '@/pages/Survey/components/SurveyFormHeader';
import SurveyLoading from '@/pages/Survey/components/SurveyLoading';
import useSurveyForm from '@/pages/Survey/hooks/useSurveyForm';

interface SurveyFormProps {
  surveyId: number;
}

function SurveyForm({ surveyId }: SurveyFormProps) {
  const { data: survey, isError, isLoading } = useGetSurvey({ surveyId });

  const { register, errors, onSubmit, isPending } = useSurveyForm({
    surveyId,
  });

  if (isLoading) {
    return <SurveyLoading />;
  }

  if (isError || !survey) {
    return (
      <div className='flex-col-center h-[500px] gap-10 py-120'>
        <p className='text-center'>
          {isError
            ? '설문 정보를 불러오는 중에 문제가 발생했습니다.'
            : '설문 정보가 없습니다.'}
        </p>
        <Link
          to={'/'}
          className={
            'px-12 py-6 bg-primary-400 rounded-[20px] text-14 text-white'
          }
        >
          홈으로
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={'w-full'}>
      <SurveyFormHeader title={survey.title} description={survey.description} />

      <SurveyFormBody
        questions={survey.questionGetResponses}
        register={register}
        errors={errors}
        isPending={isPending}
      />
    </form>
  );
}

export default SurveyForm;
