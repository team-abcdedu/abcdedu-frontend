import { useState } from 'react';

import RequiredInput from '@/pages/Admin/components/FormBuilder/RequiredInput';

import QuestionnaireBuilder from './QuestionnaireBuilder';

interface InputItem {
  id: number;
}

function FormBuilder() {
  const [inputItems, setInputItems] = useState<InputItem[]>([{ id: 0 }]);
  const [inputIdx, setInputIdx] = useState(1);

  const handleAddItem = () => {
    setInputItems([...inputItems, { id: inputIdx }]);
    setInputIdx(prev => prev + 1);
  };

  const handleDeleteItem = (index: number) => {
    setInputItems(inputItems.filter(item => item.id !== index));
  };

  return (
    <form className={'w-full h-full flex flex-col gap-10 overflow-hidden'}>
      <ul
        className={
          'w-full h-[calc(100%_-_50px)] p-5 flex flex-col items-center gap-5 border-3 rounded-xl overflow-y-scroll bg-primary-50'
        }
      >
        <RequiredInput />
        {inputItems.map((item, itemIdx) => (
          <QuestionnaireBuilder
            key={item.id}
            deleteHandler={() => handleDeleteItem(item.id)}
            itemIdx={itemIdx}
          />
        ))}
        <button
          type={'button'}
          onClick={handleAddItem}
          className={'w-1/2 flex-row-center rounded-lg bg-neutral-300'}
        >
          +
        </button>
      </ul>
      <button
        className={'h-40 px-20 text-20 border-2 rounded-lg border-neutral-300'}
      >
        등록하기
      </button>
    </form>
  );
}

export default FormBuilder;
