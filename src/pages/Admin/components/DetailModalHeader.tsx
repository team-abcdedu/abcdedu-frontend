interface DetailModalHeaderProps {
  list: { [key: string]: string };
}

function DetailModalHeader({ list }: DetailModalHeaderProps) {
  return (
    <div
      className={
        'p-5 flex justify-around text-18 border-2 border-neutral-300 rounded-sm'
      }
    >
      {Object.entries(list).map(([key, value]) => (
        <div key={key} className={'flex-row-center gap-10'}>
          <span className={'text-14 text-neutral-500'}>{key}</span>
          <span className={'text-17'}>{value}</span>
        </div>
      ))}
    </div>
  );
}

export default DetailModalHeader;
