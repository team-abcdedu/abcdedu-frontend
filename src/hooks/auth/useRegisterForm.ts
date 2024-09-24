import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import { ApiError } from '@/libs/errors';
import auth from '@/services/auth';
import { FieldRules } from '@/types';
import { UseAuthFormProps } from '@/types/auth';

interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
  confirmPw: string;
}

export default function useRegisterForm({ onSuccess }: UseAuthFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormInput>({ mode: 'onBlur' }); // blur 시 유효성 검사, 재검증 onChange(default)
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] =
    useState(false);

  const fieldRules: FieldRules<IRegisterFormInput> = {
    name: { required: '이름을 입력하세요.' },
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
    confirmPw: {
      required: '비밀번호 확인을 입력하세요.',
      validate: {
        match: (value, { password }) =>
          value === password || '비밀번호가 일치하지 않습니다.',
      },
    },
  };

  const signUp = async (data: FieldValues) => {
    const { name, email, password } = data;
    setIsRegisterButtonDisabled(true);
    try {
      await auth.signUp(name, email, password);
      alert('회원가입이 완료되었습니다.');
      onSuccess();
    } catch (error) {
      if (error instanceof ApiError && error.status) {
        if (error.status === 409) alert(error.message);
      } else alert('로그인에 실패했습니다.');
      console.log(error);
    } finally {
      setIsRegisterButtonDisabled(false);
    }
  };

  const onSubmit = async () => {
    handleSubmit(signUp)();
  };

  return {
    isRegisterButtonDisabled,
    errors,
    fieldRules,
    register,
    onSubmit,
  };
}
