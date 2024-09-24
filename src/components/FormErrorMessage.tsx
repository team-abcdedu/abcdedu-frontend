import { FieldError } from 'react-hook-form';

export default function FormErrorMessage({
  fieldErrors,
  size = 'xs',
}: {
  fieldErrors: FieldError;
  size?: 'xs' | 'base';
}) {
  return (
    <span role='alert' className={`text-${size} text-red-500`}>
      {fieldErrors.message}
    </span>
  );
}
