import { useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

export interface IRepliesDownloadForm {
  fromDate: string;
  toDate: string;
}

function useRepliesDownloadForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm<IRepliesDownloadForm>();

  const fieldRules: FieldRules<IRepliesDownloadForm> = {
    fromDate: {
      required: '날짜를 입력해주세요',
      onChange: () => trigger(),
    },
    toDate: {
      required: '날짜를 입력해주세요',
      validate: value => {
        const fromDate = watch('fromDate');
        if (fromDate && new Date(value) < new Date(fromDate)) {
          return '종료 날짜는 시작 날짜 이후이어야 합니다.';
        }
        return true;
      },
      onChange: () => trigger(),
    },
  };

  return { register, handleSubmit, reset, errors, fieldRules };
}

export default useRepliesDownloadForm;
