import { useState } from 'react';

import { SubClassData } from '@/types/class';

import FileList from './FileList';

interface SubClassCardProps {
  classTitle: string;
  subClass: SubClassData;
}

function SubClassCard({ classTitle, subClass }: SubClassCardProps) {
  const [openFileList, setOpenFileList] = useState<boolean>(false);

  return (
    <li
      className={'w-full p-10 border-2 rounded-lg bg-white'}
      key={subClass.subClassId}
    >
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>ID</span>
        <p className={'col-span-4'}>{subClass.subClassId}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <span className={'text-14 text-neutral-500'}>이름</span>
        <p className={'col-span-4'}>
          {classTitle}-{subClass.orderNumber}
        </p>
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
            'col-span-2 px-10 text-12 border-2 rounded-lg border-neutral-300'
          }
          onClick={() => setOpenFileList(prev => !prev)}
        >
          파일 목록 확인하기
        </button>
        {openFileList && <FileList subLectureId={subClass.subClassId} />}
      </div>
    </li>
  );
}

export default SubClassCard;
