import { ChangeEvent, useState } from 'react';

import Modal from '@/components/Modal';

interface TheoryRegisterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function TheoryRegisterModal({ isVisible, onClose }: TheoryRegisterModalProps) {
  const inputWrapperStyle = 'w-full flex flex-col gap-5 p-5';
  const [filePath, setFilePath] = useState<string | null>(null);
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0] as File;

    if (!file) return;
    setFilePath(file.name);
  };

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <form
          id={'theory-register'}
          className={'w-full flex flex-col gap-10 text-16'}
        >
          <div className={`${inputWrapperStyle}`}>
            <label htmlFor={'title'} className={`w-fit px-5`}>
              클래스명
            </label>
            <input
              id={'title'}
              type='text'
              className={'p-5 border-2 rounded-md'}
            />
          </div>
          <div className={`${inputWrapperStyle}`}>
            <div
              className={`w-full px-5 flex justify-between items-center gap-20`}
            >
              <span>이론 파일</span>
              <label
                htmlFor={'file'}
                className={
                  'py-2 px-5 text-14 text-neutral-100 border-2 rounded-md bg-neutral-300'
                }
              >
                파일 찾기
              </label>
            </div>
            <div className={'w-full flex justify-between'}>
              <input
                type={'text'}
                value={filePath ?? ''}
                readOnly
                className={'w-full p-5 text-neutral-500 border-2 rounded-md'}
              />
              <input
                id={'file'}
                type={'file'}
                onChange={fileChangeHandler}
                className={'hidden'}
              />
            </div>
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          form={'theory-register'}
          className={'w-1/2 h-40 text-white rounded-md bg-primary-300'}
        >
          등록
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default TheoryRegisterModal;
