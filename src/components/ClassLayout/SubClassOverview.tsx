import { ClassData, SubClassData } from '@/types/class';

interface SubClassOverviewProps {
  viewData: ClassData | SubClassData;
  classTitle: string;
}

function isClassData(data: ClassData | SubClassData): data is ClassData {
  return (data as ClassData).subClasses !== undefined;
}

function SubClassOverview({ viewData, classTitle }: SubClassOverviewProps) {
  let title;
  let subTitle;
  let description;

  if (isClassData(viewData)) {
    title = `Class ${viewData.title}`;
    subTitle = viewData.subTitle;
    description = viewData.description;
  } else {
    title = `Class ${classTitle}-${viewData.orderNumber}`;
    subTitle = viewData.title;
    description = viewData.description;
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
            'text-80 text-primary-300 font-bold whitespace-pre-wrap sm:whitespace-normal'
          }
        >
          {title}
        </h1>
        <h3 className={'text-25 font-semibold whitespace-pre-wrap'}>
          {subTitle}
        </h3>
        <h4 className={'text-18 text-neutral-400'}>{description}</h4>
      </div>
    </div>
  );
}

export default SubClassOverview;
