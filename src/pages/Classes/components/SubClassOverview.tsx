interface SubClassOverviewProps {
  title: string;
  subTitle: string;
  description: string;
}

function SubClassOverview(props: SubClassOverviewProps) {
  const { title, subTitle, description } = props;

  return (
    <div className={'min-h-[600px] px-24 flex justify-center'}>
      <div
        className={
          'max-w-[400px] flex flex-col items-center gap-12 self-center text-center'
        }
      >
        <h1 className={'text-18 text-neutral-400'}>ABCD Classes</h1>
        <h1
          className={
            'text-80 text-primary-300 font-bold whitespace-pre-wrap sm:whitespace-normal'
          }
        >
          {title}
        </h1>
        <h4 className={'text-25 font-semibold whitespace-pre-wrap'}>
          {subTitle}
        </h4>
        <h1 className={'text-18 text-neutral-400'}>{description}</h1>
      </div>
    </div>
  );
}

export default SubClassOverview;
