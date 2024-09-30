import { StrictPropsWithChildren } from '@/types';

export default function ModalHeader({ children }: StrictPropsWithChildren) {
  return <div className='pt-12 px-12'>{children}</div>;
}
