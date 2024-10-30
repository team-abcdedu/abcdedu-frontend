import { achievements } from '../constants';

import AnimatedCounter from './AnimatedCounter';

export default function Achievements() {
  const cardContainerStyle = (i: number) => {
    if (i % 3 === 2)
      return 'relative bg-[#f8f8f8] min-h-184 md:min-h-96 rounded-xl md:col-span-2 px-18 py-16';
    return 'bg-[#f8f8f8] flex flex-col justify-between min-h-184 rounded-xl p-12 pb-20 pr-36';
  };

  return (
    <div
      className='w-full max-w-[671px] grid grid-cols-2 auto-rows-auto 
      gap-x-15 gap-y-20 px-18 max-md:grid-cols-1 max-md:px-40'
    >
      {achievements.map((a, i) => (
        <div key={a.label} className={cardContainerStyle(i)}>
          <div
            className={`flex items-end ${i === 2 && 'md:items-center'} gap-12`}
          >
            <div
              className={`flex-row-center rounded-full bg-white w-46 h-46 mb-10
              ${i === 2 && 'md:w-64 md:h-64 md:mb-0'}`}
            >
              <img
                src={a.imgUrl}
                alt={`icon-${i + 1}`}
                className={`${i === 2 ? 'w-36' : 'w-18'} h-18`}
              />
            </div>
            <div>
              <p className='text-left font-bold text-18'>
                <span dangerouslySetInnerHTML={{ __html: a.label }} />
                <span className='font-medium text-10 text-zinc-400'>
                  ({a.unit})
                </span>
              </p>
            </div>
          </div>
          <AnimatedCounter
            from={0}
            to={a.value}
            className={`${i === 2 && 'absolute bottom-16 right-36'} 
            text-24 font-extrabold text-orange text-right`}
          />
        </div>
      ))}
    </div>
  );
}
