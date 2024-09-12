import useModal from '@/hooks/useModal';
import AnswerFileUploadModal from '@/pages/Admin/Class/components/AnswerFileUploadModal';
import FileUploadModal from '@/pages/Admin/Class/components/FileUploadModal';
import SubClassCard from '@/pages/Admin/Class/components/SubClassCard';
import { ClassData } from '@/types/class';

interface ClassDetailProps {
  classData: ClassData | null;
}

function ClassDetail({ classData }: ClassDetailProps) {
  const { isVisible: mainVisible, toggleModal: mainToggle } = useModal();
  const { isVisible: subVisible, toggleModal: subToggle } = useModal();

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
          <span className={'text-14 text-neutral-500'}>타입</span>
          <span className={'col-span-11 text-17'}>{classData.type}</span>
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
        <h1 className={'col-start-3 text-20 text-center font-medium'}>
          서브 클래스
        </h1>
        <div className={'col-span-2 px-10 flex justify-end gap-20'}>
          <button
            className={'px-10 text-15 border-2 rounded-lg border-neutral-300'}
            onClick={mainToggle}
          >
            파일 업로드
          </button>
          <button
            className={'px-10 text-15 border-2 rounded-lg border-neutral-300'}
            onClick={subToggle}
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
            <SubClassCard key={subClass.subClassId} subClass={subClass} />
          ))}
        </ul>
      </div>
      <FileUploadModal isVisible={mainVisible} onClose={mainToggle} />
      <AnswerFileUploadModal isVisible={subVisible} onClose={subToggle} />
    </div>
  );
}

export default ClassDetail;
