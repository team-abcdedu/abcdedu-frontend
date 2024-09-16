import { useState } from 'react';

import HomeworkTable from '@/pages/Admin/Homework/components/HomeworkTable';

import FormBuilder from '../components/FormBuilder';

function Homework() {
  const [mode, setMode] = useState<'list' | 'register'>('list');

  const handleAssignmentRegister = () => {
    setMode(mode === 'list' ? 'register' : 'list');
  };

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
      {mode === 'list' ? <HomeworkTable /> : <FormBuilder />}
    </div>
  );
}

export default Homework;
