import ClassNavigationCard from '@/pages/Classes/components/ClassNavigationCard';
import { CourseInfo } from '@/types/classTypes';

function CourseOverview({ courseInfo }: { courseInfo: CourseInfo }) {
  const { title, subTitle, description, classes } = courseInfo;

  const courseDescription =
    subTitle && description ? `${subTitle}: ${description}` : '';

  return (
    <div
      className={
        'w-full min-h-100 p-30 flex flex-col border-2 border-white rounded-[20px]'
      }
    >
      <h3 className={'text-30 font-semibold text-white'}>{title}</h3>
      <p className={'mt-5 mb-20 text-20 text-white'}>{courseDescription}</p>
      <ClassNavigationCard classes={classes} bgColor={'white'} />
    </div>
  );
}

export default CourseOverview;
