// WritePostModal.tsx
import { X } from '@phosphor-icons/react';
import React, { useState } from 'react';

import Modal from '@/components/Modal';

import { WritePostModalProps, WritePostFormData } from '../types/index';

const WritePostModal: React.FC<WritePostModalProps> = ({
  isVisible,
  onClose,
}) => {
  // 값 설정
  const [formData, setFormData] = useState<WritePostFormData>({
    title: '',
    content: '',
    file: undefined,
    isSecret: false,
    allowComments: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 파일 변경
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : undefined;
    setFormData(prevData => ({
      ...prevData,
      file,
    }));
  };

  // 글 쓰고 게시판에 등록
  const handleSubmit = () => {
    // 추후 폼 제출 로직 추가
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className='flex flex-col'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-bold'>글쓰기</h2>
            <button onClick={onClose} className='cursor-pointer'>
              <X size={24} />
            </button>
          </div>

          <div className='p-4'>
            <div className='flex flex-row space-x-14 mb-20'>
              <label htmlFor='title' className='block text-black mb-2'>
                제목
              </label>
              <input
                id='title'
                name='title'
                type='text'
                placeholder='Type here...'
                className='w-2/3 border rounded p-2'
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className='mb-20'>
              <textarea
                id='content'
                name='content'
                placeholder='Type here...'
                className='w-full h-64 border rounded p-4 min-h-[384px] resize-none'
                value={formData.content}
                onChange={handleChange}
              />
            </div>

            <div className='mb-20 flex flex-row space-x-14'>
              <label htmlFor='file' className='block text-gray-700 text  mb-2'>
                첨부파일
              </label>
              <input
                id='file'
                name='file'
                type='file'
                className='w-2/3 border rounded p-2 h-full'
                onChange={handleFileChange}
              />
            </div>

            <div className='flex items-center mb-4'>
              <input
                type='checkbox'
                id='secret'
                name='isSecret'
                className='mr-2'
                checked={formData.isSecret}
                onChange={handleChange}
              />
              <label htmlFor='secret'>비밀글 설정</label>
            </div>

            <div className='flex items-center mb-20'>
              <input
                type='checkbox'
                id='allowComments'
                name='allowComments'
                className='mr-2'
                checked={formData.allowComments}
                onChange={handleChange}
              />
              <label htmlFor='allowComments'>댓글 허용</label>
            </div>

            <div className='flex justify-center space-x-4'>
              <button
                className='w-1/4 py-8 px-16 w-5/1 rounded-2xl border border-primary-400 text-primary-400'
                onClick={() => console.log('임시저장')}
              >
                임시저장
              </button>
              <button
                className='w-1/4 py-8 px-16 w-5/1 rounded-2xl bg-primary-400 text-white'
                onClick={handleSubmit}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default WritePostModal;
