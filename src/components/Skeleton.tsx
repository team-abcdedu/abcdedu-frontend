interface SkeletonProps {
  w: number;
  h: number;
  radius?: number;
  wUnit?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  w,
  h,
  wUnit = 'px',
  radius = 8,
  style,
}: SkeletonProps) {
  const size: React.CSSProperties = {
    width: `${w}${wUnit}`,
    height: `${h}px`,
    borderRadius: `${radius}px`,
  };

  return (
    <div
      className='animate-skeleton'
      role='status'
      style={{ ...size, ...style }}
    />
  );
}
