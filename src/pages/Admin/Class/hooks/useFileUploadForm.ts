import { useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

export interface IFileUploadForm {
  type: string;
  file: FileList;
}

function useFileUploadForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFileUploadForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IFileUploadForm> = {
    type: {
      required: '타입을 선택해주세요',
    },
    file: {
      required: '파일을 첨부해주세요',
    },
  };

  return { register, errors, handleSubmit, reset, fieldRules };
}

export default useFileUploadForm;
