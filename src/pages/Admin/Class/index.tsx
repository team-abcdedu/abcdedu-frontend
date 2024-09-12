import { useState } from 'react';

import useModal from '@/hooks/useModal';
import ClassDetail from '@/pages/Admin/Class/components/ClassDetail';
import ClassTable from '@/pages/Admin/Class/components/ClassTable';

import { ClassTableData } from '../types';

import ClassRegisterModal from './components/ClassRegisterModal';
import SubClassRegisterModal from './components/SubClassRegisterModal';

function Index() {
  const [selectedClass, setSelectedClass] = useState<ClassTableData | null>(
    null,
  );
  const { isVisible: classVisible, toggleModal: classToggle } = useModal();
  const { isVisible: subClassVisible, toggleModal: subClassToggle } =
    useModal();

  const buttonStyle = 'px-10 text-20 border-2 rounded-lg border-neutral-300';

  const handleRowClick = (classData: ClassTableData) => {
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
            {selectedClass && (
              <button className={`${buttonStyle}`} onClick={handleBackClick}>
                뒤로 가기
              </button>
            )}
            {!selectedClass && (
              <>
                <button className={`${buttonStyle}`} onClick={classToggle}>
                  클래스 등록
                </button>
                <button className={`${buttonStyle}`} onClick={subClassToggle}>
                  서브 클래스 등록
                </button>
              </>
            )}
          </div>
        </div>
        {selectedClass && <ClassDetail classData={selectedClass} />}
        {!selectedClass && <ClassTable handleRowClick={handleRowClick} />}
      </div>
      <ClassRegisterModal isVisible={classVisible} onClose={classToggle} />
      <SubClassRegisterModal
        isVisible={subClassVisible}
        onClose={subClassToggle}
      />
    </>
  );
}

export default Index;
