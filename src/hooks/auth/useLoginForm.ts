import { useForm, FieldValues } from 'react-hook-form';

interface ILoginFormInput {
  email: string;
  password: string;
}

export default function useLoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ILoginFormInput>({ reValidateMode: 'onSubmit' }); // 폼 제출 시에만 재검증

  const hasErrors = Object.keys(errors).length > 0;

  const getErrorMessage = () => {
    const emptyFields = [];
    if (errors.email) emptyFields.push('이메일');
    if (errors.password) emptyFields.push('비밀번호');
    return emptyFields.join(', ');
  };

  const login = (data: FieldValues) => {
    alert(JSON.stringify(data)); // 확인용, 추후 제거
    // login
  };

  const onSubmit = () => {
    handleSubmit(login)();
  };

  return {
    hasErrors,
    getErrorMessage,
    register,
    onSubmit,
  };
}
