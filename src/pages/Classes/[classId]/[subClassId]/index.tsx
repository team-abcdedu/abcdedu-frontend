import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckToSlot from '@/assets/icons/check-to-slot.svg?react';
import MessageModal from '@/components/MessageModal';
import useGetSubClassFileList from '@/hooks/class/useGetSubClassFileList';
import useModal from '@/hooks/useModal';
import { useSubClassIdMap } from '@/pages/Classes/[classId]';
import ExamContent from '@/pages/Classes/components/ExamContent';
import SubClassFileItem from '@/pages/Classes/components/SubClassFileItem';
import useBoundStore from '@/stores';
import { FileData } from '@/types/class';

function SubClass() {
  const buttonStyle =
    'w-100 min-h-[140px] flex flex-col justify-start items-center place-self-center';
  const iconWrapperStyle = 'w-100 h-100 flex-row-center';
  const iconStyle =
    'w-80 h-80 sm:w-85 sm:h-85 md:w-90 md:h-90 text-primary-300';
  const textStyle = 'text-20 sm:text-22 md:text-25 font-semibold text-center';

  const { classId, subClassId } = useParams();
  const subClassIdMap = useSubClassIdMap();

  const { isVisible, toggleModal } = useModal();
  const [modalMessage, setModalMessage] = useState('');
  const [openExam, setOpenExam] = useState(false);

  const { data: fileList } = useGetSubClassFileList({
    subLectureId: subClassIdMap[`${classId?.toUpperCase()}-${subClassId}`],
  });

  const findFiles = useCallback(
    (type: string) => {
      return fileList?.filter(file => file.assignmentType === type);
    },
    [fileList],
  );

  const user = useBoundStore(state => state.user);

  const [theoryFiles, setTheoryFiles] = useState<FileData[]>([]);
  const [dataFiles, setDataFiles] = useState<FileData[]>([]);
  const [examFiles, setExamFiles] = useState<FileData[]>([]);
  const [examPaperFiles, setExamPaperFiles] = useState<FileData[]>([]);

  const handleExamClick = () => {
    if (user?.role !== '관리자' && user?.role !== '학생') {
      setModalMessage('학생 이상만 이용 가능합니다.');
      toggleModal();
      return;
    }
    if (examFiles.length < 1 && examPaperFiles.length < 1) {
      setModalMessage('시험 파일이 없습니다.');
      toggleModal();
      return;
    }
    setOpenExam(prev => !prev);
  };

  useEffect(() => {
    if (fileList) {
      if (user?.role === '관리자') {
        setTheoryFiles(findFiles('이론') ?? []);
      }
      setDataFiles(findFiles('자료') ?? []);
      setExamFiles(findFiles('시험') ?? []);
      setExamPaperFiles(findFiles('시험지') ?? []);
    }
  }, [fileList, classId, subClassId, findFiles]);

  useEffect(() => {
    setOpenExam(false);
  }, [classId, subClassId]);

  return (
    <>
      <div
        className={
          'mt-0 mb-60 px-50 grid grid-cols-2 sm:flex-row-center gap-20 sm:gap-50'
        }
      >
        {theoryFiles.length > 0 && (
          <SubClassFileItem
            type={'이론'}
            files={theoryFiles}
            toggleModal={toggleModal}
            setModalMessage={setModalMessage}
          />
        )}

        {dataFiles.length > 0 && (
          <SubClassFileItem
            type={'자료'}
            files={dataFiles}
            toggleModal={toggleModal}
            setModalMessage={setModalMessage}
          />
        )}

        {(examFiles.length > 0 || examPaperFiles.length > 0) && (
          <button className={buttonStyle} onClick={handleExamClick}>
            <div className={iconWrapperStyle}>
              <CheckToSlot className={iconStyle} />
            </div>
            <div className={textStyle}>시험</div>
          </button>
        )}
      </div>
      {(examFiles.length > 0 || examPaperFiles.length > 0) && openExam && (
        <ExamContent
          examFileId={examFiles[0]?.assignmentFileId}
          examPaperFileId={examPaperFiles[0]?.assignmentFileId}
        />
      )}

      <MessageModal
        isVisible={isVisible}
        onClose={toggleModal}
        type={'error'}
        message={modalMessage}
      />
    </>
  );
}

export default SubClass;
