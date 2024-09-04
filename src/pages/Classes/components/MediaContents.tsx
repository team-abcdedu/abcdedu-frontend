import { mediaList } from '../constants';

function MediaContents() {
  return (
    <section
      className={
        'p-50 flex flex-col lg:flex-row justify-between gap-10 bg-neutral-200'
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
                'w-full lg:w-150 h-60 px-16 py-8 text-15 font-medium text-primary-300 btn-white-pb !border-2 rounded-[10px]'
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
