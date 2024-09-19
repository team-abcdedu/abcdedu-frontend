import { FormEventHandler, useState } from 'react';

import RequiredField from '@/pages/Admin/components/FormBuilder/RequiredField';

import QuestionnaireBuilder from './QuestionnaireBuilder';

interface InputItem {
  id: number;
}

interface FormBuilderProps {
  formName: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

function FormBuilder({ formName }: FormBuilderProps) {
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
    <form
      id={formName}
      onSubmit={e => {
        e.preventDefault();
      }}
      className={'w-full h-full flex flex-col gap-10 overflow-hidden'}
    >
      <ul
        className={
          'w-full h-full p-5 flex flex-col items-center gap-5 border-3 rounded-xl overflow-y-scroll bg-primary-50'
        }
      >
        <RequiredField />
        {inputItems.map((item, questionIdx) => (
          <QuestionnaireBuilder
            key={item.id}
            deleteHandler={() => handleDeleteItem(item.id)}
            questionIdx={questionIdx}
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
    </form>
  );
}

export default FormBuilder;
