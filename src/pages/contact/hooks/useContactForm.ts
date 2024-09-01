import { useForm, FieldValues } from 'react-hook-form';

import { FieldRules } from '@/types';

interface IContactFormInput {
  name: string;
  phone: number;
  email: string;
  content: string;
}

export default function useContactForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IContactFormInput>({ mode: 'onBlur' });

  const fieldRules: FieldRules<IContactFormInput> = {
    name: { required: '이름을 입력하세요.' },
    phone: { required: '연락처를 입력하세요.' },
    email: {
      required: '이메일을 입력하세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '올바르지 않은 이메일 형식입니다.',
      },
    },
    content: { required: '내용을 입력하세요.' },
  };

  const submitForm = async (data: FieldValues) => {
    // const { name, phone, email, content} = data;
    alert(JSON.stringify(data));
  };

  const onSubmit = async () => {
    handleSubmit(submitForm)();
  };

  return {
    errors,
    fieldRules,
    register,
    reset,
    onSubmit,
  };
}
