import { Link } from 'react-router-dom';

import SubClassNavigationCard from '@/pages/Classes/components/SubClassNavigationCard';
import { ClassData } from '@/types/class';

interface ClassOverviewProps {
  index: number;
  classData: ClassData;
}

function ClassOverview({ index, classData }: ClassOverviewProps) {
  const { title, subTitle, description } = classData;

  const bgColors = [
    'bg-primary-75',
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
  ];
  const textColors = [
    'text-primary-75',
    'text-primary-100',
    'text-primary-200',
    'text-primary-300',
  ];

  return (
    <section
      key={title}
      className={`min-h-60 p-50 sm:py-100 sm:px-70 flex flex-col lg:flex-row items-center gap-70 ${bgColors[index]}`}
    >
      <Link
        className={
          'min-w-115 min-h-115 h-115 flex-row-center bg-white rounded-[100%] text-80'
        }
        to={`/classes/${title.toLowerCase()}`}
      >
        <span className={`text-80 font-bold text-center ${textColors[index]}`}>
          {title}
        </span>
      </Link>

      <div
        className={
          'w-full min-h-100 p-30 flex flex-col border-2 border-white rounded-[20px]'
        }
      >
        <h3 className={'text-30 font-semibold text-white'}>Class {title}</h3>
        <p className={'mt-5 mb-20 text-20 text-white'}>
          {subTitle ? `${subTitle} ` : ''}{' '}
          {description ? `: ${description}` : ''}
        </p>
        <SubClassNavigationCard bgColor={'white'} classData={classData} />
      </div>
    </section>
  );
}

export default ClassOverview;
