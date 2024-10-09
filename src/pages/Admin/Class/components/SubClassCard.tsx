import { useState } from 'react';

import useModal from '@/hooks/useModal';
import FileUploadModal from '@/pages/Admin/Class/components/FileUploadModal';
import { SubClassData } from '@/types/class';

import FileList from './FileList';

interface SubClassCardProps {
  classTitle: string;
  subClass: SubClassData;
}

function SubClassCard({ classTitle, subClass }: SubClassCardProps) {
  const [openFileList, setOpenFileList] = useState<boolean>(false);

  const { isVisible, toggleModal } = useModal();

  return (
    <li
      className={'w-full p-10 border-2 rounded-lg bg-white'}
      key={subClass.subClassId}
    >
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>이름</span>
        <p className={'col-span-2'}>
          {classTitle}-{subClass.orderNumber}
        </p>
        <button
          className={'col-span-2 border-1 border-neutral-300 rounded-md'}
          type={'button'}
          onClick={toggleModal}
        >
          파일 업로드
        </button>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>주제</span>
        <p className={'col-span-4'}>{subClass.title}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>설명</span>
        <p className={'col-span-4'}>{subClass.description}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>파일</span>
        <button
          type={'button'}
          className={
            'col-span-2 px-10 text-13 border-1 rounded-md border-neutral-300'
          }
          onClick={() => setOpenFileList(prev => !prev)}
        >
          파일 목록 확인하기
        </button>
        {openFileList && <FileList subLectureId={subClass.subClassId} />}
      </div>

      <FileUploadModal
        subClassId={subClass.subClassId}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </li>
  );
}

export default SubClassCard;
