import { PropsWithChildren } from 'react';

interface SubClassFileItem2Props {
  label: string;
  onClick: () => void;
}

function SubClassFileItem({
  children,
  label,
  onClick,
}: PropsWithChildren<SubClassFileItem2Props>) {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const textStyle = 'text-20 sm:text-22 md:text-25 font-semibold text-center';

  return (
    <button type={'button'} className={buttonStyle} onClick={onClick}>
      <div className={iconWrapperStyle}>{children}</div>
      <div className={textStyle}>{label}</div>
    </button>
  );
}

export default SubClassFileItem;
