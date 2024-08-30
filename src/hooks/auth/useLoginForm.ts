import { useForm, FieldValues } from 'react-hook-form';

import { FieldRules } from '@/types';
import { UseAuthFormProps } from '@/types/auth';

interface ILoginFormInput {
  email: string;
  password: string;
}

export default function useLoginForm({ onSuccess }: UseAuthFormProps) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginFormInput>();

  const fieldRules: FieldRules<ILoginFormInput> = {
    email: {
      required: '이메일을 입력하세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '올바르지 않은 이메일 형식입니다.',
      },
    },
    password: {
      required: '비밀번호를 입력하세요.',
      minLength: {
        value: 6,
        message: '비밀번호는 최소 6자 이상이어야 합니다.',
      },
      maxLength: {
        value: 20,
        message: '비밀번호는 최대 20자까지 입력할 수 있습니다.',
      },
    },
  };

  const login = async (data: FieldValues) => {
    const { email, password } = data;
    console.log(email, password);
    onSuccess();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(login)();
  };

  return {
    fieldRules,
    errors,
    register,
    onSubmit,
  };
}
