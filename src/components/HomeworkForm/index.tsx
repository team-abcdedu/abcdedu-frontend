import { useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import Loader from '@/components/Loader';
import { ApiError } from '@/libs/errors';
import useHomeworkMutation from '@/pages/Homework/hooks/useHomeworkMutation';
import HomeworkApi from '@/services/homework';
import { HomeworkInfo, IHomeworkForm } from '@/types/homework';

import HomeworkFormHeader from './HomeworkFormHeader';
import HomeworkFormMain from './HomeworkFormMain';

type UserSubmitModeProps = {
  mode: 'user-submit';
  previewHomework?: never;
};

type AdminPreviewModeProps = {
  mode: 'admin-preview';
  previewHomework: HomeworkInfo;
};

type HomeworkFormProps = UserSubmitModeProps | AdminPreviewModeProps;

function HomeworkForm({ mode, previewHomework }: HomeworkFormProps) {
  const isUserSubmitMode = mode === 'user-submit';

  const { data: homework } = useQuery({
    queryKey: ['homework'],
    queryFn: () => HomeworkApi.getRepresentativeHomework(),
    enabled: isUserSubmitMode,
  });

  const definedHomework = isUserSubmitMode ? homework : previewHomework;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IHomeworkForm>({ mode: 'onSubmit' });

  const { mutation } = useHomeworkMutation({
    homeworkId: definedHomework?.homeworkId || 0,
  });

  const onSubmit: SubmitHandler<IHomeworkForm> = data => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        alert('과제가 제출되었습니다..');
      },
      onError: error => {
        alert(
          error instanceof ApiError
            ? error.message
            : '과제 제출 중 문제가 발생했습니다.',
        );
      },
    });
  };

  return (
    <form
      id={'homework-form'}
      onSubmit={isUserSubmitMode ? handleSubmit(onSubmit) : undefined}
      className={'w-full h-full break-keep whitespace-pre-wrap'}
    >
      {mutation.isPending && <Loader />}
      <HomeworkFormHeader homework={definedHomework} />
      <HomeworkFormMain
        homework={definedHomework}
        register={register}
        errors={errors}
        submitPending={isUserSubmitMode ? mutation.isPending : true}
      />
    </form>
  );
}

export default HomeworkForm;
