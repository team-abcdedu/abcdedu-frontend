import { SubmitHandler, useForm } from 'react-hook-form';

import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

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

  const submitForm: SubmitHandler<IClassRegisterForm> = async data => {
    try {
      await AdminClassApi.createClass(data);
      alert('클래스가 성공적으로 등록되었습니다.');
    } catch (error) {
      alert('클래스 등록에 실패했습니다.');
      console.error(error);
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, fieldRules, errors, onSubmit, reset };
}

export default useClassRegisterForm;
