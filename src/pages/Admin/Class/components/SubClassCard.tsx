import { useState } from 'react';

import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import { SubClassData } from '@/types/class';

import FileItem from './FileItem';

interface SubClassCardProps {
  subClass: SubClassData;
}

function SubClassCard({ subClass }: SubClassCardProps) {
  const [enabled, setEnabled] = useState<boolean>(false);
  const { data, isLoading, isError } = useGetSubClassFileList({
    subLectureId: subClass.subClassId,
    enabled,
  });

  return (
    <li
      className={'w-full p-10 border-2 rounded-lg bg-white'}
      key={subClass.subClassId}
    >
      <div className={'grid grid-cols-5 items-center'}>
        <h2 className={'text-14 text-neutral-500'}>ID</h2>
        <p className={'col-span-4'}>{subClass.subClassId}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <h2 className={'text-14 text-neutral-500'}>타이틀</h2>
        <p className={'col-span-4'}>{subClass.title}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <h2 className={'text-14 text-neutral-500'}>설명</h2>
        <p className={'col-span-4'}>{subClass.description}</p>
      </div>
      <div className={'grid grid-cols-5 items-center'}>
        <h2 className={'text-14 text-neutral-500'}>파일</h2>
        <button
          type={'button'}
          className={
            'col-span-2 px-10 text-12 border-2 rounded-lg border-neutral-300'
          }
          onClick={() => setEnabled(prev => !prev)}
        >
          파일 목록 확인하기
        </button>
        {enabled && isError && (
          <span className={'col-start-5 text-15'}>
            데이터를 불러오는데 오류가 생겼습니다.
          </span>
        )}
        {enabled && isLoading && (
          <span className={'col-start-5 text-15'}>Loading...</span>
        )}
        {enabled &&
          !isLoading &&
          (data && data.length > 0 ? (
            <div
              className={
                'row-start-5 col-start-2 col-span-4 grid grid-cols-4 pt-5 gap-3'
              }
            >
              {data.map(file => (
                <FileItem
                  key={file.assignmentFileId}
                  assignmentType={file.assignmentType}
                  assignmentFileId={file.assignmentFileId}
                />
              ))}
            </div>
          ) : (
            <span className={'col-start-5 text-15'}>없음</span>
          ))}
      </div>
    </li>
  );
}

export default SubClassCard;
