import { useForm } from 'react-hook-form';

export interface ISurveyForm {
  [key: string]: string;
}

function useSurveyForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ISurveyForm>({ mode: 'onSubmit' });

  return { register, reset, errors, handleSubmit };
}

export default useSurveyForm;
