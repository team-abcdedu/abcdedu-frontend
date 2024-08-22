import { StrictPropsWithChildren } from '@/types';

/**
 * @description 모달에 들어갈 컨텐츠
 */
export default function ModalContent({ children }: StrictPropsWithChildren) {
  return (
    <div className='w-full pt-24 px-24 pb-12 overflow-auto'>{children}</div>
  );
}
