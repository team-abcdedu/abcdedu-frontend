import { imageInfo } from './constants';

export default function Gallery() {
  return (
    <div>
      <div className='w-full h-[600px] flex-col-center bg-primary-300'>
        <h2 className='text-center text-white leading-[1.3] font-bold'>
          <span className='block text-18 tracking-[6px] -mr-6 pb-12'>
            GALLERY
          </span>
          <span className='text-64 xs:text-80 break-keep max-xs:leading-[1.1]'>
            ABCDEdu 교육현장
          </span>
        </h2>
      </div>
      <section className='py-80'>
        <div className='flex justify-between items-center mb-30'>
          <div className='flex-1 h-4 bg-primary-300' />
          <h3 className='basis-1/3 whitespace-nowrap shrink-0 text-center text-22 sm:text-26 text-neutral-500 font-bold px-16 sm:px-32'>
            학생들과 함께하는 교육 세션
          </h3>
          <div className='flex-1 h-4 bg-primary-300' />
        </div>
        <div className='w-full max-w-[1458px] px-24 py-50 mx-auto'>
          <div className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_270px))] gap-15 justify-center'>
            {imageInfo.map((image, i) => (
              <div key={i} className='aspect-square'>
                <img
                  src={image.url}
                  className='w-full h-full object-cover'
                  alt='photo2'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
