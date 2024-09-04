import Skeleton from '@/components/Skeleton';

export default function ProfileLoading() {
  return (
    <div className='w-full max-w-screen-sm m-auto px-24 pt-60 pb-180 flex flex-col gap-20'>
      <div className='flex items-center gap-16'>
        <Skeleton w={58} h={58} radius={9999} style={{ flexShrink: '0' }} />
        <Skeleton w={100} wUnit='%' h={35} style={{ maxWidth: '520px' }} />
      </div>
      <Skeleton w={100} wUnit='%' h={200} style={{ maxWidth: '600px' }} />
    </div>
  );
}
