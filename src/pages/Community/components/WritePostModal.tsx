import { X } from '@phosphor-icons/react';
import { useState } from 'react';

import Modal from '@/components/Modal';
import { post } from '@/libs/api';

import { WritePostModalProps, WritePostFormData } from '../types/WriteModal';

function WritePostModal({ isVisible, onClose, boardId }: WritePostModalProps) {
  const [formData, setFormData] = useState<WritePostFormData>({
    data: {
      boardId,
      title: '',
      content: '',
      secret: false,
      commentAllow: true,
    },
    file: null, // 파일을 null로 초기화
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;

    if (target.type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        data: {
          ...prevData.data,
          [name]: target.checked,
        },
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        data: {
          ...prevData.data,
          [name]: value,
        },
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // 파일을 null로 설정
    setFormData(prevData => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append(
      'data',
      JSON.stringify({
        boardId: formData.data.boardId,
        title: formData.data.title,
        content: formData.data.content,
        secret: formData.data.secret,
        commentAllow: formData.data.commentAllow,
      }),
    );

    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }

    try {
      await post('/posts/', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('글 작성 성공!');
      console.log(formDataToSend);
    } catch (err) {
      console.log('글 작성 실패..', err);
      console.log(formDataToSend);
    }
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose} size='lg'>
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
                value={formData.data.title}
                onChange={handleChange}
              />
            </div>

            <div className='mb-20'>
              <textarea
                id='content'
                name='content'
                placeholder='Type here...'
                className='w-full h-64 border rounded p-4 min-h-[384px] resize-none'
                value={formData.data.content}
                onChange={handleChange}
              />
            </div>

            <div className='mb-20 flex flex-row space-x-14'>
              <label htmlFor='file' className='block text-gray-700 text mb-2'>
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
                name='secret'
                className='mr-2'
                checked={formData.data.secret}
                onChange={handleChange}
              />
              <label htmlFor='secret'>비밀글 설정</label>
            </div>

            <div className='flex items-center mb-20'>
              <input
                type='checkbox'
                id='commentAllow'
                name='commentAllow'
                className='mr-2'
                checked={formData.data.commentAllow}
                onChange={handleChange}
              />
              <label htmlFor='commentAllow'>댓글 허용</label>
            </div>

            <div className='flex justify-center space-x-4'>
              <button
                className='w-1/4 py-8 px-16 rounded-2xl bg-primary-400 text-white'
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
}

export default WritePostModal;
