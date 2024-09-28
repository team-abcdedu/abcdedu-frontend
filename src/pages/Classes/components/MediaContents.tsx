import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';

import { mediaList } from '../constants';

function MediaContents() {
  const { isVisible, toggleModal } = useModal();
  const user = useBoundStore(state => state.user);

  const handleMediaClick = (url: string) => {
    if (!user || user?.role !== '관리자') {
      toggleModal();
      return;
    }
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

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
              key={media.title}
              className={
                'w-full lg:w-150 h-60 px-16 py-8 flex-row-center text-center text-15 font-medium text-primary-300 btn-white-pb !border-2 rounded-[10px]'
              }
              type={'button'}
              onClick={() => handleMediaClick(media.url)}
            >
              {media.title}
            </button>
          );
        })}
      </div>
      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'error'}
        message={'관리자만 접근 가능합니다.'}
      />
    </section>
  );
}

export default MediaContents;
