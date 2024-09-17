import { useState } from 'react';

interface FlexibleInputItem {
  id: number;
}

interface QuestionnaireInputProps {
  type: 'radio' | 'checkbox' | 'textarea';
}

function QuestionnaireInput({ type }: QuestionnaireInputProps) {
  const textareaStyle = type === 'textarea' ? 'hidden' : 'block';

  const [items, setItems] = useState<FlexibleInputItem[]>([{ id: 0 }]);
  const [itemIdx, setItemIdx] = useState(1);

  const handleAddItem = () => {
    setItems([...items, { id: itemIdx }]);
    setItemIdx(prev => prev + 1);
  };

  const handleDeleteItem = (index: number) => {
    if (items.length === 1) return;
    setItems(items.filter(item => item.id !== index));
  };

  return (
    <div className={'w-full flex-col-center gap-3'}>
      {items.map(item => (
        <div
          key={item.id}
          className={'w-full grid grid-cols-7 justify-items-center'}
        >
          <div className={'w-[10%] flex-row-center gap-20'}>
            {type === 'radio' && <input name={'temp'} type='radio' />}
            {type === 'checkbox' && <input name={'temp'} type='checkbox' />}
            <button
              type={'button'}
              onClick={() => handleDeleteItem(item.id)}
              className={`${textareaStyle} text-13 text-red-700 font-semibold`}
            >
              X
            </button>
          </div>
          <input
            type='text'
            className={`${textareaStyle} w-full col-span-6 px-10 border-1 rounded-md`}
            placeholder={'내용을 입력해주세요'}
          />
        </div>
      ))}
      <button
        type={'button'}
        className={`${textareaStyle} w-1/5 px-20 text-13 font-semibold border-2 rounded-2xl bg-white`}
        onClick={handleAddItem}
      >
        +
      </button>
    </div>
  );
}

export default QuestionnaireInput;
