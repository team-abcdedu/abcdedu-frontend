import { SubmitHandler, useForm } from 'react-hook-form';

import userApi from '@/services/user';
import { FieldRules } from '@/types';
import { UseAuthFormProps } from '@/types/auth';

interface IPasswordFormInput {
  newPw: string;
  confirmPw: string;
}

export default function usePasswordForm({ onSuccess }: UseAuthFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IPasswordFormInput>({ mode: 'onChange' });

  const fieldRules: FieldRules<IPasswordFormInput> = {
    newPw: {
      minLength: {
        value: 6,
        message: '비밀번호는 최소 6자 이상이어야 합니다.',
      },
      maxLength: {
        value: 20,
        message: '비밀번호는 최대 20자까지 입력할 수 있습니다.',
      },
    },
    confirmPw: {
      validate: {
        match: (value, { newPw }) =>
          value === newPw || '비밀번호가 일치하지 않습니다.',
      },
    },
  };

  const updateAccountInfo: SubmitHandler<IPasswordFormInput> = async (
    data,
    e,
  ) => {
    e?.preventDefault();
    const { newPw } = data;

    try {
      await userApi.updatePassword(newPw);
      alert('비밀번호가 변경되었습니다.');
      onSuccess();
      reset();
    } catch (error) {
      console.log(error);
      alert('비밀번호 변경에 실패했습니다.');
    }
  };

  const onSubmit = handleSubmit(updateAccountInfo);

  return {
    reset,
    errors,
    fieldRules,
    register,
    onSubmit,
  };
}
