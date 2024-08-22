import useScrollLock from '@/hooks/useScrollLock';

interface BackdropProps {
  /**
   * 어두운 배경 설정 여부
   * @default true
   */
  isDark?: boolean;
  onClick: () => void;
}

export default function Backdrop({ isDark = true, onClick }: BackdropProps) {
  useScrollLock(isDark);

  return (
    <div
      id='backdrop'
      className={`${isDark && 'bg-[rgba(0,0,0,0.7)]'} h-full fixed inset-0 z-backdrop`}
      onClick={onClick}
    />
  );
}
