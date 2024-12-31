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
    formState: { errors },
  } = useForm<IRepliesDownloadForm>({ mode: 'onChange' });

  const fieldRules: FieldRules<IRepliesDownloadForm> = {
    fromDate: {
      required: '날짜를 입력해주세요',
    },
    toDate: {
      required: '날짜를 입력해주세요',
      validate: value => {
        const fromDate = watch('fromDate');
        if (fromDate) {
          const fromDateObj = new Date(fromDate);
          const toDateObj = new Date(value);

          fromDateObj.setHours(0, 0, 0, 0);
          toDateObj.setHours(0, 0, 0, 0);

          if (toDateObj < fromDateObj) {
            return '종료 날짜는 시작 날짜 이후이어야 합니다.';
          }
        }
        return true;
      },
    },
  };

  return { register, handleSubmit, reset, errors, fieldRules };
}

export default useRepliesDownloadForm;
