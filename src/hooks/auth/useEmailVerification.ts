import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ApiError } from '@/libs/errors';
import authApi from '@/services/auth';
import useBoundStore from '@/stores';
import { FieldRules } from '@/types';

interface EmailVerificationInput {
  email: string;
  code: string;
}

export default function useEmailVerification() {
  const [isMailSent, setIsMailSent] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [timer, setTimer] = useState(300); // 5분 타이머
  const [timerKey, setTimerKey] = useState(1);

  const { setIsEmailVerified, setVerifiedEmail } = useBoundStore(state => ({
    setIsEmailVerified: state.setIsEmailVerified,
    setVerifiedEmail: state.setVerifiedEmail,
  }));

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<EmailVerificationInput>();

  const fieldRules: FieldRules<EmailVerificationInput> = {
    email: {
      required: '이메일을 입력하세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '올바르지 않은 이메일 형식입니다.',
      },
    },
    code: {},
  };

  // 인증번호 요청
  const handleRequestSubmit: SubmitHandler<EmailVerificationInput> = async (
    data,
    e,
  ) => {
    e?.preventDefault();
    setIsPending(true);

    try {
      await authApi.requestVerificationCode(data.email);
      setTimer(300);
      setTimerKey(prev => prev + 1);
      setIsMailSent(true);
    } catch (error) {
      console.log(error);
      alert('인증번호 요청에 실패했습니다.');
    } finally {
      setIsPending(false);
    }
  };

  // 인증번호 검증
  const handleVerifySubmit: SubmitHandler<EmailVerificationInput> = async (
    data,
    e,
  ) => {
    e?.preventDefault();
    const { email, code } = data;

    if (!code) {
      setError('code', { type: 'manual', message: '인증번호를 입력하세요.' });
      return;
    }

    setIsPending(true);

    try {
      await authApi.verifyCode(email, code);
      alert('이메일 인증이 완료되었습니다.');
      setIsEmailVerified();
      setVerifiedEmail(email);
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 400) alert('인증번호가 일치하지 않습니다.');
        if (error.status === 404)
          alert(
            '인증번호가 유효하지 않거나 만료되었습니다.\n인증번호를 다시 요청해 주세요.',
          );
      } else {
        console.log(error);
        alert('이메일 인증에 실패했습니다.');
      }
    } finally {
      setIsPending(false);
    }
  };

  const onVerifyFormSubmit = handleSubmit(handleVerifySubmit);
  const onRequestCodeSubmit = handleSubmit(handleRequestSubmit);

  return {
    isMailSent,
    isPending,
    register,
    fieldRules,
    errors,
    onVerifyFormSubmit,
    onRequestCodeSubmit,
    timer,
    timerKey,
  };
}
