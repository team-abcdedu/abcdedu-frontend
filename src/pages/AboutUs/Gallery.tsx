import { useState } from 'react';

import useModal from '@/hooks/useModal';

import ImageModal from './components/ImageModal';
import { imageInfo } from './constants';
import { GalleryImage } from './types';

export default function Gallery() {
  const { isVisible, toggleModal } = useModal();

  const [selected, setSelected] = useState<GalleryImage>(imageInfo[0]);

  const handleClick = (image: GalleryImage) => {
    setSelected(image);
    toggleModal();
  };

  return (
    <div>
      <div className='w-full h-[600px] flex-col-center bg-primary-400'>
        <h2 className='flex-col-center text-center text-white leading-[1.3] font-bold'>
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
          <div className='flex-1 h-4 bg-primary-400' />
          <h3
            className='basis-1/3 whitespace-nowrap shrink-0 text-center text-22 sm:text-26 
          text-neutral-500 font-bold px-16 sm:px-32'
          >
            학생들과 함께하는 교육 세션
          </h3>
          <div className='flex-1 h-4 bg-primary-400' />
        </div>
        <div className='w-full max-w-[1458px] px-24 py-50 mx-auto'>
          <div
            className='grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_270px))] 
            gap-15 justify-center'
          >
            {imageInfo.map(image => (
              <button
                type='button'
                key={image.id}
                className='aspect-square'
                onClick={() => handleClick(image)}
              >
                <img
                  src={image.url}
                  className='w-full h-full object-cover'
                  alt='photo2'
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      <ImageModal
        image={selected}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}
