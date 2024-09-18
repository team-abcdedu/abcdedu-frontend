import useModal from '@/hooks/useModal';
import GeneralFileUploadModal from '@/pages/Admin/Class/components/GeneralFileUploadModal';
import StudentFileUploadModal from '@/pages/Admin/Class/components/StudentFileUploadModal';
import SubClassCard from '@/pages/Admin/Class/components/SubClassCard';
import { ClassData } from '@/types/class';

interface ClassDetailProps {
  classData: ClassData | null;
}

function ClassDetail({ classData }: ClassDetailProps) {
  const {
    isVisible: isGeneralUploadVisible,
    toggleModal: isGeneralUploadToggle,
  } = useModal();
  const {
    isVisible: isStudentUploadVisible,
    toggleModal: isStudentUploadToggle,
  } = useModal();

  if (!classData) return null;
  return (
    <div
      className={
        'w-full h-full p-10 flex-col-center gap-10 overflow-hidden break-words'
      }
    >
      <div
        className={
          'w-full min-h-fit max-h-[25%] py-5 px-10 flex flex-col text-18 border-2 border-neutral-300 rounded-sm'
        }
      >
        <div className={'grid grid-cols-12 items-center'}>
          <span className={'text-14 text-neutral-500'}>클래스명</span>
          <span className={'col-span-11 text-17'}>{classData.title}</span>
        </div>
        <div className={'grid grid-cols-12 items-center'}>
          <span className={'text-14 text-neutral-500'}>부제목</span>
          <span className={'col-span-11 text-17'}>{classData.subTitle}</span>
        </div>
        <div
          className={
            'w-full h-full grid grid-cols-12 items-center overflow-scroll'
          }
        >
          <span className={'text-14 text-neutral-500'}>설명</span>
          <span className={'col-span-11 h-full text-17 overflow-scroll'}>
            {classData.description}
          </span>
        </div>
      </div>

      <div className={'w-full grid grid-cols-5'}>
        <div className={'col-start-3 text-20 text-center font-medium'}>
          서브 클래스
        </div>
        <div className={'col-span-2 px-10 flex justify-end gap-20'}>
          <button
            className={'px-10 text-15 border-2 rounded-lg border-neutral-300'}
            onClick={isGeneralUploadToggle}
          >
            파일 업로드
          </button>
          <button
            className={'px-10 text-15 border-2 rounded-lg border-neutral-300'}
            onClick={isStudentUploadToggle}
          >
            학생 제출용 파일 업로드
          </button>
        </div>
      </div>

      <div
        className={
          'w-full h-full p-10 overflow-y-scroll rounded-lg bg-neutral-100'
        }
      >
        <ul className={'grid grid-cols-2 gap-10'}>
          {classData.subClasses.map(subClass => (
            <SubClassCard
              key={subClass.subClassId}
              classTitle={classData.title}
              subClass={subClass}
            />
          ))}
        </ul>
      </div>
      <GeneralFileUploadModal
        isVisible={isGeneralUploadVisible}
        onClose={isGeneralUploadToggle}
      />
      <StudentFileUploadModal
        isVisible={isStudentUploadVisible}
        onClose={isStudentUploadToggle}
      />
    </div>
  );
}

export default ClassDetail;
