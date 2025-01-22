import {
  DetailedHTMLProps,
  FormEvent,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ICreateHomeworkFormValues } from '../../hooks/useCreateHomeworkForm';

interface AutoResizeTextareaProps
  extends DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    UseFormRegister<ICreateHomeworkFormValues> {
  customStyle?: string;
}

const AutoResizeTextarea = forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(({ customStyle, ...rest }, ref) => {
  const autoResize = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    // 높이를 초기화한 후 scrollHeight 맞춰 높이 설정
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <textarea
      onInput={autoResize}
      rows={1}
      ref={ref}
      {...rest}
      className={`w-full px-5 border-1 overflow-y-hidden bg-neutral-50 ${customStyle}`}
    />
  );
});

AutoResizeTextarea.displayName = 'AutoResizeTextarea';

export default AutoResizeTextarea;
