import { mediaList } from '@/pages/Classes/constants/classInfo';

function MediaContents() {
  return (
    <section
      className={
        'flex flex-col lg:flex-row justify-between gap-10 p-50 bg-neutral-200'
      }
    >
      <h3
        className={'text-30 font-bold text-primary-300 grid place-items-center'}
      >
        영상 콘텐츠
      </h3>
      <div
        className={
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-flow-row gap-10'
        }
      >
        {mediaList.map(media => {
          return (
            <button
              key={media}
              className={
                'w-full lg:w-150 h-60 text-15 text-primary-300 font-medium border-2 border-primary-300 bg-white rounded-[10px] py-8 px-16 hover:bg-neutral-200'
              }
            >
              {media}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MediaContents;
