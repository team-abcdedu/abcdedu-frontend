import { useForm, FieldValues } from 'react-hook-form';

import contactApi from '@/services/contact';
import { FieldRules } from '@/types';
import { ContactForm, ContactType } from '@/types/contact';

interface UseContactFormProps {
  contactType: ContactType;
  onSuccess: () => void;
}

export default function useContactForm({
  contactType,
  onSuccess,
}: UseContactFormProps) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactForm>({ mode: 'onBlur' });

  const fieldRules: FieldRules<ContactForm> = {
    userName: { required: '이름을 입력하세요.' },
    phoneNumber: { required: '연락처를 입력하세요.' },
    email: {
      required: '이메일을 입력하세요.',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '올바르지 않은 이메일 형식입니다.',
      },
    },
    title: { required: '제목을 입력하세요.' },
    content: { required: '내용을 입력하세요.' },
  };

  const submitForm = async (data: FieldValues) => {
    try {
      await contactApi.createContact(data as ContactForm, contactType);
      alert('문의가 접수되었습니다.');
      onSuccess();
      reset();
    } catch (error) {
      console.log(error);
    }
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
