import { useForm } from 'react-hook-form';

function useSurveyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  // const onSubmit = (data) => {

  // };

  return { register, handleSubmit, errors };
}

export default useSurveyForm;
