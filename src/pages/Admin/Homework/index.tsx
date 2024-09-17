import { useState } from 'react';

import HomeworkList from '@/pages/Admin/Homework/components/HomeworkList';
import useSubmitHomeworkForm from '@/pages/Admin/Homework/hooks/useSubmitHomeworkForm';

import FormBuilder from '../components/FormBuilder';

function Homework() {
  const [mode, setMode] = useState<'list' | 'register'>('list');

  const handleAssignmentRegister = () => {
    setMode(mode === 'list' ? 'register' : 'list');
  };

  const { onSubmit } = useSubmitHomeworkForm();

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>
          {mode === 'list' ? '과제 관리' : '과제 등록'}
        </h1>
        <button
          className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
          onClick={handleAssignmentRegister}
        >
          {mode === 'list' ? '과제 등록' : '과제 관리'}
        </button>
      </div>

      <div className={'w-full h-[calc(100%_-_50px)] overflow-hidden'}>
        {mode === 'list' ? (
          <HomeworkList />
        ) : (
          <FormBuilder formName={'create-homework-form'} onSubmit={onSubmit} />
        )}
      </div>

      {mode === 'register' && (
        <button
          className={
            'h-40 px-20 text-20 border-2 rounded-lg border-neutral-300'
          }
          form={'create-homework-form'}
        >
          등록하기
        </button>
      )}
    </div>
  );
}

export default Homework;
