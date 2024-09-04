import { useForm, FieldValues } from 'react-hook-form';

import { FieldRules } from '@/types';
import { UseAuthFormProps } from '@/types/auth';

interface IAccountFormInput {
  email?: string;
  password: string;
  newPw?: string;
  confirmPw?: string;
}

export default function useAccountForm({ onSuccess }: UseAuthFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAccountFormInput>({ mode: 'onBlur' });

  const fieldRules: FieldRules<IAccountFormInput> = {
    email: {
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
    newPw: {
      minLength: {
        value: 6,
        message: '비밀번호는 최소 6자 이상이어야 합니다.',
      },
      maxLength: {
        value: 20,
        message: '비밀번호는 최대 20자까지 입력할 수 있습니다.',
      },
      validate: {
        match: (value, { password }) => {
          if (password === '') {
            return true;
          }
          return (
            value !== password ||
            '현재 비밀번호와 동일한 비밀번호로는 변경할 수 없습니다.'
          );
        },
      },
    },
    confirmPw: {
      validate: {
        match: (value, { newPw }) =>
          value === newPw || '비밀번호가 일치하지 않습니다.',
      },
    },
  };

  const updateAccountInfo = async (data: FieldValues) => {
    console.log(data);
    onSuccess();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(updateAccountInfo)();
  };

  return {
    errors,
    fieldRules,
    register,
    onSubmit,
  };
}
