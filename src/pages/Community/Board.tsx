import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import Head from '@/components/Head';
import useModal from '@/hooks/useModal';
import useBoundStore from '@/stores';

import List from './components/List';
import PostFormModal from './components/PostFormModal';
import { boardMetaData, Category } from './constants/communityInfo';

export default function Board() {
  const { isVisible, toggleModal } = useModal();
  const user = useBoundStore(state => state.user);

  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const label = boardMetaData[category as Category];

  const { reset } = useQueryErrorResetBoundary();

  if (!category || !(category in boardMetaData)) {
    return <Navigate to='/community' replace />;
  }

  const isPostButtonVisible =
    (category === 'document' && user && user.role === '관리자') ||
    (category !== 'document' && user && user.role !== '새싹');

  return (
    <div className='flex flex-col text-center mt-20'>
      <Head title={`${label} | ABCDEdu`} />
      <div className='py-30'>
        <p className='text-gray-400'>ABCDEdu 커뮤니티</p>
        <h3 className='text-primary-400 text-30 font-bold'>{label}</h3>
      </div>
      {isPostButtonVisible && (
        <div className='flex flex-row w-full justify-end px-20 py-10'>
          <button
            onClick={toggleModal}
            className='text-sm py-2 px-10 md:py-8 md:px-30 rounded-3xl bg-primary-400 text-white hover:opacity-80'
          >
            글쓰기
          </button>
        </div>
      )}
      {isVisible && (
        <PostFormModal isVisible={isVisible} onClose={toggleModal} />
      )}
      <ErrorBoundary onReset={reset}>
        <List boardName={category} page={page} />
      </ErrorBoundary>
    </div>
  );
}
