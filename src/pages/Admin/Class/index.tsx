import { useState } from 'react';

import MessageModal from '@/components/MessageModal';
import useModal from '@/hooks/useModal';
import ClassDetail from '@/pages/Admin/Class/components/ClassDetail';
import ClassTable from '@/pages/Admin/Class/components/ClassTable';
import { ClassData } from '@/types/class';

import ClassRegisterModal from './components/ClassRegisterModal';
import SubClassRegisterModal from './components/SubClassRegisterModal';

function Index() {
  const buttonStyle = 'px-10 text-20 border-2 rounded-lg border-neutral-300';

  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const { isVisible: isClassVisible, toggleModal: classToggle } = useModal();
  const { isVisible: isSubClassVisible, toggleModal: subClassToggle } =
    useModal();
  const { isVisible: isMessageVisible, toggleModal: messageToggle } =
    useModal();

  const handleRowClick = (classData: ClassData) => {
    setSelectedClass(classData);
  };

  const handleBackClick = () => {
    setSelectedClass(null);
  };

  return (
    <>
      <div className={'w-full h-full flex flex-col gap-20'}>
        <div className={'w-full flex justify-between pr-50'}>
          <h1 className={'text-30 font-semibold'}>클래스 관리</h1>
          <div className={'flex-row-center gap-30'}>
            <button className={`${buttonStyle}`} onClick={messageToggle}>
              클래스 등록
            </button>
            <button className={`${buttonStyle}`} onClick={messageToggle}>
              서브 클래스 등록
            </button>

            {selectedClass && (
              <button className={`${buttonStyle}`} onClick={handleBackClick}>
                뒤로 가기
              </button>
            )}
          </div>
        </div>
        {selectedClass && <ClassDetail classData={selectedClass} />}
        {!selectedClass && <ClassTable handleRowClick={handleRowClick} />}
      </div>

      <MessageModal
        isVisible={isMessageVisible}
        onClose={messageToggle}
        type={'error'}
        message={'현재 사용할 수 없는 기능입니다.'}
      />
      <ClassRegisterModal isVisible={isClassVisible} onClose={classToggle} />
      <SubClassRegisterModal
        isVisible={isSubClassVisible}
        onClose={subClassToggle}
      />
    </>
  );
}

export default Index;
