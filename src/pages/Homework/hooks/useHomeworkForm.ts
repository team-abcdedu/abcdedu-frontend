import { useForm } from 'react-hook-form';

export interface IHomeworkForm {
  [key: string]: string;
}

function useHomeworkForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IHomeworkForm>({ mode: 'onSubmit' });

  return { register, errors, reset, handleSubmit };
}

export default useHomeworkForm;
