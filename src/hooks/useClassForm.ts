import DOMPurify from 'dompurify';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormValues } from '@/types/classForm';

interface useClassFormProps {
  type: 'assignment' | 'exam' | 'survey';
  toggleModal: () => void;
}

function useClassForm({ type, toggleModal }: useClassFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onSubmit' });

  const submitForm: SubmitHandler<FormValues> = data => {
    console.log(type);

    Object.entries(data.answers).map(([key, value]) => {
      const cleanedValue = DOMPurify.sanitize(value);
      console.log(`${key}: ${cleanedValue}`);
      return [key, cleanedValue];
    });
    toggleModal();
  };

  const onSubmit = handleSubmit(submitForm);

  return { register, onSubmit, errors };
}

export default useClassForm;
