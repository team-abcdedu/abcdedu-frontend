import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FieldRules } from '@/types';

import useClass from './useClassMutation';

interface IClassRegisterForm {
  title: string;
  type: string;
  description: string;
}

interface UseClassRegisterFormProps {
  onClose: () => void;
}

function useClassRegisterForm({ onClose }: UseClassRegisterFormProps) {
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

  const queryClient = useQueryClient();
  const { classMutation } = useClass();

  const submitForm: SubmitHandler<IClassRegisterForm> = (data, event) => {
    event?.preventDefault();
    classMutation.mutate(data, {
      onSuccess: () => {
        alert('클래스가 등록되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['class'] });
        onClose();
      },
      onError: error => {
        alert('클래스 등록에 실패했습니다.');
        if (isAxiosError(error)) {
          console.error(error.response?.data.result.message);
          return;
        }
        console.error(error);
      },
    });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, fieldRules, errors, onSubmit, reset };
}

export default useClassRegisterForm;
