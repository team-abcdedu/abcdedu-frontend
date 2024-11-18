import { FieldError } from 'react-hook-form';

interface FormErrorMessageProps extends React.HTMLAttributes<HTMLSpanElement> {
  fieldErrors: FieldError;
  size?: 'xs' | 'base';
}

export default function FormErrorMessage({
  fieldErrors,
  size = 'xs',
  className,
  ...rest
}: FormErrorMessageProps) {
  return (
    <span
      role='alert'
      className={`text-${size} text-red-500 ${className}`}
      {...rest}
    >
      {fieldErrors.message}
    </span>
  );
}
