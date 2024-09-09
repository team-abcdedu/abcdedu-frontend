import { useState } from 'react';

import FormBuilder from '@/pages/Admin/components/FormBuilder';
import SurveyTable from '@/pages/Admin/components/SurveyTable';

function Survey() {
  const [mode, setMode] = useState<'list' | 'register'>('list');

  const handleSurveyRegister = () => {
    setMode(mode === 'list' ? 'register' : 'list');
  };

  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <div className={'w-full flex justify-between pr-50'}>
        <h1 className={'text-30 font-semibold'}>
          {mode === 'list' ? '설문 관리' : '설문 등록'}
        </h1>
        <button
          className={'px-10 text-20 border-2 rounded-lg border-neutral-300'}
          onClick={handleSurveyRegister}
        >
          {mode === 'list' ? '설문 등록' : '설문 관리'}
        </button>
      </div>
      {mode === 'list' ? <SurveyTable /> : <FormBuilder />}
    </div>
  );
}

export default Survey;
