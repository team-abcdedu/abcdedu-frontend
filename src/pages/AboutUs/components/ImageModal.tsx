import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';

import { GalleryImage } from '../types';

interface ImageModalProps {
  image: GalleryImage;
  isVisible: boolean;
  onClose: () => void;
}

export default function ImageModal({
  image,
  isVisible,
  onClose,
}: ImageModalProps) {
  const formattedDate = new Date(image.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Modal size='lg' isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <button
          type='button'
          className='block ml-auto -mt-6 -mr-10 mb-12'
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className='xs:px-6 xs:pt-6 pb-12 xs:pb-18'>
          <div className='mb-16'>
            <img
              src={image.url}
              alt={image.date}
              className='w-full h-full max-w-[650px] max-h-[500px] object-cover object-center'
            />
          </div>
          <span className='block text-neutral-500'>{formattedDate}</span>
          <span className='font-bold'>{image.school}</span>
        </div>
      </Modal.Content>
    </Modal>
  );
}
