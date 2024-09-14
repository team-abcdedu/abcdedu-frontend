import Skeleton from '@/components/Skeleton';

export default function ContactDetailLoading() {
  return (
    <div>
      <Skeleton w={160} h={36} style={{ marginBottom: '20px' }} />
      <div className='flex flex-col gap-8 pb-24 min-h-[300px]'>
        <Skeleton w={270} h={100} />
        <hr className='my-12'></hr>
        <Skeleton w={200} h={27} />
        <Skeleton w={100} wUnit='%' h={100} />
      </div>
    </div>
  );
}
