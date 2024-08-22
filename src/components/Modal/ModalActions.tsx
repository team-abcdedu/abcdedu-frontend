import { StrictPropsWithChildren } from '@/types';

type Direction = 'row' | 'col';

export interface ModalActionsProps {
  /**
   * 정렬 방향
   * @default col
   */
  direction?: Direction;
}

/**
 * @description 모달에 들어갈 액션들. 확인, 닫기 버튼 등
 */
export default function ModalActions({
  direction = 'col',
  children,
}: StrictPropsWithChildren<ModalActionsProps>) {
  const flexStyle = () => {
    if (direction === 'row') return 'flex justify-center items-center';
    return 'flex flex-col justify-center items-center';
  };
  return (
    <div className={`${flexStyle()} gap-12 pt-12 px-24 pb-24`}>{children}</div>
  );
}
