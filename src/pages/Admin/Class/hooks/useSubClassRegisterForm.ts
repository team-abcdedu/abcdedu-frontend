import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ApiError } from '@/libs/errors';
import AdminClassApi from '@/services/admin/class';
import { FieldRules } from '@/types';

interface ISubClassRegisterForm {
  classId: number;
  title: string;
  description: string;
  orderNumber: number;
}

interface UseSubClassRegisterFormProps {
  onClose: () => void;
}

function useSubClassRegisterForm({ onClose }: UseSubClassRegisterFormProps) {
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

  const queryClient = useQueryClient();

  const subClassMutation = useMutation({
    mutationFn: (subClassData: {
      classId: number;
      title: string;
      description: string;
      orderNumber: number;
    }) => AdminClassApi.createSubClass(subClassData),
  });

  const submitForm: SubmitHandler<ISubClassRegisterForm> = (data, event) => {
    event?.preventDefault();
    subClassMutation.mutate(data, {
      onSuccess: () => {
        alert('서브 클래스가 등록되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['class'] });
        onClose();
      },
      onError: error => {
        alert('서브 클래스 등록에 실패했습니다.');
        if (error instanceof ApiError) {
          console.error(error.message);
          return;
        }
        console.error(error);
      },
    });
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, fieldRules, errors, onSubmit, reset };
}

export default useSubClassRegisterForm;
