import { X } from '@phosphor-icons/react';

import Modal from '@/components/Modal';
import { ContactType } from '@/types/contact';

import { contactTypeLabel } from '../../constants';
import useGetContact from '../hooks/useGetContact';

import ContactDetailLoading from './ContactDetailLoading';

interface ContactDetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  id: number | null;
}

export default function ContactDetailModal({
  isVisible,
  onClose,
  id,
}: ContactDetailModalProps) {
  const { data, isLoading, isError } = useGetContact(id);
  if (!id) return null;

  if (isError || (!isLoading && !data)) {
    alert('문의 내용을 불러오는 중 오류가 발생했습니다.');
    onClose();
  }

  const textStyle = 'flex gap-16 [&_span]:text-neutral-500';
  return (
    <Modal size='lg' isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <button
          type='button'
          className='absolute top-12 right-12'
          onClick={onClose}
        >
          <X size={24} />
        </button>
        {isLoading ? (
          <ContactDetailLoading />
        ) : (
          <>
            <h2 className='text-24 font-semibold mb-20'>
              {contactTypeLabel[data?.type as ContactType]}
            </h2>
            <div className='flex flex-col gap-4 pb-24 min-h-[300px]'>
              <p className={textStyle}>
                <span>작성자</span> {data?.userName}
              </p>
              <p className={textStyle}>
                <span>연락처</span> {data?.phoneNumber}
              </p>
              <p className={textStyle}>
                <span>이메일</span> {data?.email}
              </p>
              <p className={textStyle}>
                <span>작성일</span> {data?.createdAt}
              </p>
              <hr className='my-12'></hr>
              <p className='text-18 font-semibold mb-8'>{data?.title}</p>
              <p>{data?.content}</p>
            </div>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
}
