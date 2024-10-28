import { SubmitHandler, useForm } from 'react-hook-form';

import { FieldRules } from '@/types';
import { UseAuthFormProps } from '@/types/auth';

interface IPasswordFormInput {
  // password: string;
  newPw: string;
  confirmPw: string;
}

export default function usePasswordForm({ onSuccess }: UseAuthFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPasswordFormInput>({ mode: 'onChange' });

  const fieldRules: FieldRules<IPasswordFormInput> = {
    // password: {
    //   required: '비밀번호를 입력하세요.',
    //   minLength: {
    //     value: 6,
    //     message: '비밀번호는 최소 6자 이상이어야 합니다.',
    //   },
    //   maxLength: {
    //     value: 20,
    //     message: '비밀번호는 최대 20자까지 입력할 수 있습니다.',
    //   },
    // },
    newPw: {
      minLength: {
        value: 6,
        message: '비밀번호는 최소 6자 이상이어야 합니다.',
      },
      maxLength: {
        value: 20,
        message: '비밀번호는 최대 20자까지 입력할 수 있습니다.',
      },
      // validate: {
      //   match: (value, { password }) => {
      //     if (password === '') {
      //       return true;
      //     }
      //     return (
      //       value !== password ||
      //       '현재 비밀번호와 동일한 비밀번호로는 변경할 수 없습니다.'
      //     );
      //   },
      // },
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
    console.log(data);
    onSuccess();
  };

  const onSubmit = handleSubmit(updateAccountInfo);

  return {
    errors,
    fieldRules,
    register,
    onSubmit,
  };
}
