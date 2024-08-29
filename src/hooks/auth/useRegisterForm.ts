import { useForm, FieldValues, RegisterOptions } from 'react-hook-form';

interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
  confirmPw: string;
}

type FieldRules = {
  [K in keyof IRegisterFormInput]: RegisterOptions<IRegisterFormInput, K>;
};

export default function useRegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IRegisterFormInput>({ mode: 'onBlur' }); // blur 시 유효성 검사, 재검증 onChange(default)

  const fieldRules: FieldRules = {
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
  const signUp = (data: FieldValues) => {
    alert(JSON.stringify(data)); // 확인용, 추후 제거
    // signup
  };

  const onSubmit = () => {
    handleSubmit(signUp)();
  };

  return {
    errors,
    fieldRules,
    register,
    onSubmit,
  };
}
