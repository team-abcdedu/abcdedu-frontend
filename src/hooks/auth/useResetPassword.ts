import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ApiError } from '@/libs/errors';
import authApi from '@/services/auth';
import { FieldRules } from '@/types';

interface IResetPasswordForm {
  email: string;
}

export default function useResetPassword() {
  const [isMailSent, setIsMailSent] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IResetPasswordForm>({ mode: 'onBlur' });

  const fieldRules: FieldRules<IResetPasswordForm> = {
    email: {
      required: '이메일을 입력하세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '올바르지 않은 이메일 형식입니다.',
      },
    },
  };

  const requestTempPassword: SubmitHandler<IResetPasswordForm> = async (
    data,
    e,
  ) => {
    e?.preventDefault();
    setIsPending(true);
    try {
      // 임시 비밀번호 발급 요청
      await authApi.requestTempPassword(data.email);
      setIsMailSent(prev => !prev);
    } catch (error) {
      if (error instanceof ApiError) {
        // 존재하지 않는 이메일 처리
        if (error.status === 404) alert('존재하지 않는 이메일입니다.');
      } else {
        console.log(error);
        alert('임시 비밀번호 발급 요청에 실패했습니다.');
      }
    } finally {
      setIsPending(false);
    }
  };

  const onSubmit = handleSubmit(requestTempPassword);

  return {
    isMailSent,
    isPending,
    errors,
    register,
    fieldRules,
    onSubmit,
  };
}
