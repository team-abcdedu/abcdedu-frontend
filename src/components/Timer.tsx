import { useCallback, useEffect, useRef } from 'react';

interface TimerProps extends React.HTMLAttributes<HTMLSpanElement> {
  initialTime: number;
  timerKey: number; // timerKey가 바뀌면 timer 재실행
}

function Timer({ initialTime, timerKey, ...rest }: TimerProps) {
  const timerRef = useRef<number>(initialTime);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const formatTimer = (time: number) => {
    const min = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const sec = (time % 60).toString().padStart(2, '0');

    return `${min}:${sec}`;
  };

  // timer 초기화 및 시작
  const startTimer = useCallback(() => {
    timerRef.current = initialTime;

    if (spanRef.current) {
      spanRef.current.textContent = formatTimer(timerRef.current); // initialTime 텍스트 설정
    }

    // 이전 타이머 제거
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
    }

    // 타이머 설정
    timerIdRef.current = setInterval(() => {
      if (timerRef.current > 0) {
        timerRef.current -= 1;
        if (spanRef.current) {
          spanRef.current.textContent = formatTimer(timerRef.current);
        }
      } else {
        clearInterval(timerIdRef.current!);
      }
    }, 1000);
  }, [initialTime]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerIdRef.current!);
  }, [timerKey, startTimer]);

  return <span ref={spanRef} {...rest}></span>;
}

export default Timer;
