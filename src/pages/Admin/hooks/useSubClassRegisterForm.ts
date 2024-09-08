import { SubmitHandler, useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

import useClass from './useClass';

interface ISubClassRegisterForm {
  classId: number;
  title: string;
  description: string;
  orderNumber: number;
}

function useSubClassRegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISubClassRegisterForm>({ mode: 'onSubmit' });

  const fieldRules: FieldRules<ISubClassRegisterForm> = {
    classId: {
      required: '클래스 ID를 입력해주세요',
    },
    title: {
      required: '클래스명을 입력해주세요',
      maxLength: {
        value: 20,
        message: '클래스명은 20자 이내로 입력해주세요',
      },
    },
    description: {
      maxLength: {
        value: 200,
        message: '설명은 200자 이내로 입력해주세요',
      },
    },
    orderNumber: {
      required: '번호를 입력해주세요',
    },
  };

  const { subClassMutation } = useClass();

  const submitForm: SubmitHandler<ISubClassRegisterForm> = (data, event) => {
    event?.preventDefault();
    subClassMutation.mutate(data);
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, fieldRules, errors, onSubmit, reset };
}

export default useSubClassRegisterForm;
