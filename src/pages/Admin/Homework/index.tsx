import { useState } from 'react';

import HomeworkTable from '@/pages/Admin/Homework/components/HomeworkTable';

function Homework() {
  const [mode, setMode] = useState<'table' | 'register'>('table');

  const handleHomeworkRegister = () => {
    setMode(mode === 'table' ? 'register' : 'table');
  };

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>
          {mode === 'table' ? '과제 관리' : '과제 등록'}
        </h1>
        <button
          className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
          onClick={handleHomeworkRegister}
        >
          {mode === 'table' ? '과제 등록' : '과제 관리'}
        </button>
      </div>
      {mode === 'table' ? <HomeworkTable /> : null}
    </div>
  );
}

export default Homework;
