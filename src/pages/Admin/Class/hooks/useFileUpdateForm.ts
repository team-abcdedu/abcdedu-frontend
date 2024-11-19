import { useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

export interface IFileUpdateForm {
  file: FileList;
}

function useFileUpdateForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFileUpdateForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IFileUpdateForm> = {
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  return { register, errors, handleSubmit, reset, fieldRules };
}

export default useFileUpdateForm;
