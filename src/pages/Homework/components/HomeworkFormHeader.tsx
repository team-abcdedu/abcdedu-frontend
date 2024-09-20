interface HomeworkFormHeaderProps {
  title: string;
  description: string;
  additionalDescription: string;
}

function HomeworkFormHeader({
  title,
  description,
  additionalDescription,
}: HomeworkFormHeaderProps) {
  return (
    <div
      className={
        'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center break-keep'
      }
    >
      <h1 className={'w-full'}>
        <div className={'text-30 md:text-50 font-bold text-primary-300'}>
          {title}
        </div>
      </h1>
      <h2 className={`w-full text-18 md:text-22 font-semibold`}>
        {description}
      </h2>
      <p className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
        {additionalDescription}
      </p>
    </div>
  );
}

export default HomeworkFormHeader;
