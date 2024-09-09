import DetailModalHeader from '@/components/DetailModalHeader';
import Modal from '@/components/Modal';
import { ClassTableData } from '@/types/admin';

interface ClassDetailModalProps {
  classData: ClassTableData | null;
  isVisible: boolean;
  onClose: () => void;
}

function ClassDetailModal({
  classData,
  isVisible,
  onClose,
}: ClassDetailModalProps) {
  const spanStyle = 'text-14 text-neutral-500 whitespace-nowrap';
  const subClassItemWrapperStyle = 'flex items-center gap-30';

  if (!classData) return null;

  return (
    <Modal size={'lg'} isVisible={isVisible} onClose={onClose}>
      <Modal.Content>
        <div className={'h-max flex flex-col gap-5'}>
          <DetailModalHeader
            list={{ 클래스명: classData.title, 타입: classData.type }}
          />
          <fieldset className={'w-full border-2 border-neutral-300 rounded-sm'}>
            <legend className={'text-14 text-neutral-500 text-center'}>
              클래스 설명
            </legend>
            <textarea
              className={'w-full py-5 px-10 text-15'}
              value={classData.description}
              readOnly
            />
          </fieldset>
          <fieldset
            className={
              'h-[400px] p-3 pl-8 border-2 border-neutral-300 rounded-sm overflow-hidden'
            }
          >
            <legend className={'text-14 text-neutral-500 text-center'}>
              서브 클래스
            </legend>
            <ul
              className={'w-full h-full flex flex-col gap-5 overflow-y-scroll'}
            >
              {classData.subClasses.map(subClass => (
                <li
                  key={subClass.subClassId}
                  className={
                    'w-full max-h-full py-5 px-10 grid grid-cols-2 border-2 bg-neutral-50 rounded-md'
                  }
                >
                  <div className={`${subClassItemWrapperStyle}`}>
                    <span className={`${spanStyle}`}>ID</span>
                    <span>{subClass.subClassId}</span>
                  </div>
                  <div className={`${subClassItemWrapperStyle}`}>
                    <span className={`${spanStyle}`}>순서</span>
                    <span>{subClass.orderNumber}</span>
                  </div>
                  <div className={`col-span-2 ${subClassItemWrapperStyle}`}>
                    <span className={`${spanStyle}`}>서브 클래스명</span>
                    <span className={'w-full break-all'}>{subClass.title}</span>
                  </div>
                  <div className={`col-span-2 ${subClassItemWrapperStyle}`}>
                    <span className={`${spanStyle}`}>설명</span>
                    <span className={'w-full break-all'}>
                      {subClass.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button type={'button'} onClick={onClose}>
          닫기
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default ClassDetailModal;
