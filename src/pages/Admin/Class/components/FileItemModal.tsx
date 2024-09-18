import { X } from '@phosphor-icons/react';
import { ChangeEvent, useEffect, useState } from 'react';

import Modal from '@/components/Modal';
import useGetSubClassStudentFile from '@/hooks/class/useGetSubClassStudentFile';
import AdminClassApi from '@/services/admin/class';

interface FileItemModalProps {
  assignmentType: string;
  assignmentFileId: number;
  assignmentFileUrl: string | undefined;
  isVisible: boolean;
  onClose: () => void;
}

function FileItemModal({
  assignmentType,
  assignmentFileId,
  assignmentFileUrl,
  isVisible,
  onClose,
}: FileItemModalProps) {
  const { data } = useGetSubClassStudentFile({
    assignmentAnswerFileId: assignmentFileId,
    enabled: assignmentType === '시험',
  });

  const [openGeneralFileInput, setOpenGeneralFile] = useState(false);
  const [openStudentFileInput, setStudentGeneralFile] = useState(false);

  const [generalFile, setGeneralFile] = useState<File | null>(null);
  const [studentFile, setStudentFile] = useState<File | null>(null);

  const handleGeneralFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setGeneralFile(file);
  };

  const handleStudentFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStudentFile(file);
  };

  const updateGeneralFile = () => {
    if (!generalFile) return;
    try {
      AdminClassApi.updateGeneralFile(assignmentFileId, generalFile);
      alert('파일 수정이 완료되었습니다.');
      setGeneralFile(null);
    } catch (error) {
      alert('파일 수정에 실패했습니다.');
    }
  };

  const updateStudentFile = () => {
    if (!studentFile) return;
    try {
      AdminClassApi.updateStudentFile(assignmentFileId, studentFile);
      alert('파일 수정이 완료되었습니다.');
      setStudentFile(null);
    } catch (error) {
      alert('파일 수정에 실패했습니다.');
    }
  };

  useEffect(() => {
    setGeneralFile(null);
    setStudentFile(null);
    setOpenGeneralFile(false);
    setStudentGeneralFile(false);
  }, [isVisible]);

  return (
    <Modal size={'sm'} isVisible={isVisible} onClose={onClose}>
      <div className={'w-full h-full flex-col-center gap-10 p-10 pb-30'}>
        <button type='button' className='block ml-auto' onClick={onClose}>
          <X size={24} />
        </button>

        <div className={'text-18'}>
          {assignmentType} [ {assignmentFileId} ]
        </div>
        <div className={'w-2/3 grid grid-cols-2 text-center'}>
          <span className={'text-neutral-500'}>{assignmentType} 파일</span>
          <div className={'flex gap-10'}>
            <a
              href={assignmentFileUrl}
              target={'_blank'}
              download
              className={'text-18 text-primary-300'}
              rel='noreferrer'
            >
              다운로드
            </a>
            <button
              type={'button'}
              className={'text-16 text-green-600'}
              onClick={() => setOpenGeneralFile(prev => !prev)}
            >
              수정
            </button>
          </div>
        </div>
        {openGeneralFileInput && (
          <div className={'w-full px-10 flex flex-col-center gap-10'}>
            <div className={'flex gap-10 justify-center'}>
              <input
                value={generalFile?.name}
                className={'border-2 px-5'}
                readOnly
              />
              <label
                htmlFor={'update-general-file'}
                className={'text-neutral-500 border-2 px-5 cursor-pointer'}
              >
                파일 선택
              </label>
              <input
                id={'update-general-file'}
                type={'file'}
                onChange={handleGeneralFileChange}
                className={'hidden'}
              />
            </div>
            <button
              type={'button'}
              className={
                'w-fit p-5 border-1 rounded-md text-green-800 border-green-800'
              }
              onClick={updateGeneralFile}
            >
              파일 수정하기
            </button>
          </div>
        )}
        {assignmentType === '시험' && data && (
          <div className={'w-2/3 grid grid-cols-2 text-center'}>
            <span className={'text-neutral-500'}>제출용 파일</span>
            <div className={'flex gap-10'}>
              <a
                href={data?.filePresignedUrl}
                target={'_blank'}
                download
                className={'text-18 text-primary-300'}
                rel='noreferrer'
              >
                다운로드
              </a>
              <button
                type={'button'}
                className={'text-16 text-green-600'}
                onClick={() => setStudentGeneralFile(prev => !prev)}
              >
                수정
              </button>
            </div>
          </div>
        )}
        {assignmentType === '시험' && data && openStudentFileInput && (
          <div className={'w-full px-10 flex flex-col-center gap-10'}>
            <div className={'flex gap-10 justify-center'}>
              <input
                value={studentFile?.name}
                className={'border-2 px-5'}
                readOnly
              />
              <label
                htmlFor={'update-student-file'}
                className={'text-neutral-500 border-2 px-5 cursor-pointer'}
              >
                파일 선택
              </label>
              <input
                id={'update-student-file'}
                type={'file'}
                onChange={handleStudentFileChange}
                className={'hidden'}
              />
            </div>
            <button
              type={'button'}
              className={
                'w-fit p-5 border-1 rounded-md text-green-800 border-green-800'
              }
              onClick={updateStudentFile}
            >
              파일 수정하기
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default FileItemModal;
