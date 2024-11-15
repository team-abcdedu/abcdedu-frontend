import SubClassNavigationCard from '@/components/ClassLayout/SubClassNavigationCard';
import { ClassData } from '@/types/class';

function ClassOverview({ classData }: { classData: ClassData }) {
  const { title, subTitle, description } = classData;

  return (
    <div
      className={
        'w-full min-h-100 p-30 flex flex-col border-2 border-white rounded-[20px]'
      }
    >
      <h3 className={'text-30 font-semibold text-white'}>Class {title}</h3>
      <p className={'mt-5 mb-20 text-20 text-white'}>
        {subTitle ? `${subTitle} ` : ''} {description ? `: ${description}` : ''}
      </p>
      <SubClassNavigationCard bgColor={'white'} />
    </div>
  );
}

export default ClassOverview;
