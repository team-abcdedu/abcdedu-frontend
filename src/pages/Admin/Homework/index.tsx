import useModal from '@/hooks/useModal';
import CreateHomeworkModal from '@/pages/Admin/Homework/components/CreateHomeworkModal';
import HomeworkTable from '@/pages/Admin/Homework/components/HomeworkTable';

function Homework() {
  const { isVisible, toggleModal } = useModal();

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>과제 관리</h1>
        <button
          className={'px-10 text-20 border-2 rounded border-black'}
          onClick={toggleModal}
        >
          과제 생성
        </button>
      </div>
      <HomeworkTable />
      <CreateHomeworkModal isVisible={isVisible} onClose={toggleModal} />
    </div>
  );
}

export default Homework;
