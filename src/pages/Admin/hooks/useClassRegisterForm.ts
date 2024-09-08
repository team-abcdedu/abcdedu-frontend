import { SubmitHandler, useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

import useClass from './useClass';

interface IClassRegisterForm {
  title: string;
  type: string;
  description: string;
}

function useClassRegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IClassRegisterForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<IClassRegisterForm> = {
    title: {
      required: '클래스명을 입력해주세요',
      maxLength: {
        value: 20,
        message: '클래스명은 20자 이내로 입력해주세요',
      },
    },
    type: {
      required: '타입을 입력해주세요',
      maxLength: {
        value: 20,
        message: '타입은 20자 이내로 입력해주세요',
      },
    },
    description: {
      maxLength: {
        value: 200,
        message: '설명은 200자 이내로 입력해주세요',
      },
    },
  };

  const { classMutation } = useClass();

  const submitForm: SubmitHandler<IClassRegisterForm> = (data, event) => {
    event?.preventDefault();
    classMutation.mutate(data);
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, fieldRules, errors, onSubmit, reset };
}

export default useClassRegisterForm;
