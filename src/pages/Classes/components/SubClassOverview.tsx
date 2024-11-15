import { ClassData, SubClassData } from '@/types/class';

interface SubClassOverviewProps {
  classData: ClassData | undefined;
  subClassData: SubClassData | undefined;
  isSubClassPage: boolean;
}

function SubClassOverview({
  classData,
  subClassData,
  isSubClassPage,
}: SubClassOverviewProps) {
  let title;
  let subTitle;
  let description;

  // 클래스 메인 페이지(ex. Class A)
  if (!isSubClassPage) {
    title = `Class ${classData?.title}`;
    subTitle = classData?.subTitle;
    description = classData?.description;
  } else {
    // 서브클래스 페이지(ex. Class A-1)
    title = `Class ${classData?.title}-${subClassData?.orderNumber}`;
    subTitle = subClassData?.title;
    description = subClassData?.description;
  }

  return (
    <div className={'min-h-[600px] px-24 flex justify-center'}>
      <div
        className={
          'max-w-[400px] flex flex-col items-center gap-12 self-center text-center'
        }
      >
        <p className={'text-18 text-neutral-400'}>ABCD Classes</p>
        <h1
          className={
            'text-60 sm:text-70 md:text-80 text-primary-300 font-bold whitespace-pre-wrap sm:whitespace-normal'
          }
        >
          {title}
        </h1>
        <h3 className={'text-22 sm:text-25 font-semibold whitespace-pre-wrap'}>
          {subTitle}
        </h3>
        <h4 className={'text-16 sm:text-18 text-neutral-400'}>{description}</h4>
      </div>
    </div>
  );
}

export default SubClassOverview;
