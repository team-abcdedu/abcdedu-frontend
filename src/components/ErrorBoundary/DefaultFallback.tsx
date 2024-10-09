import { ArrowClockwise } from '@phosphor-icons/react';

interface DefaultFallbackProps {
  onReset?: () => void;
}

export default function DefaultFallback({ onReset }: DefaultFallbackProps) {
  return (
    <div className='flex-col-center py-80 gap-24 text-neutral-300'>
      <ArrowClockwise size={36} />
      <div className='text-center text-zinc-600 mb-16'>
        <span className='text-18 font-semibold' role='alert'>
          잠시 후 다시 시도해 주세요.
        </span>
        <p className='text-16 text-neutral-400'>
          요청을 처리하는 중 오류가 발생했습니다.
        </p>
      </div>
      <button
        onClick={onReset}
        className='px-16 py-8 rounded-full bg-primary-400 text-white'
      >
        다시 시도하기
      </button>
    </div>
  );
}
