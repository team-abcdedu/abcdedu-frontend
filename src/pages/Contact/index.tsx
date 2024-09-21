import { useState } from 'react';

import Head from '@/components/Head';
import useModal from '@/hooks/useModal';

import ContactModal from './components/ContactModal';
import { contactItems } from './constants';
import { ContactItem } from './types';

function CardIcon({ Icon }: { Icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
  return <Icon className='w-110 max-sm:w-90 h-fit py-7 fill-primary-300' />;
}

type SelectedType = Pick<ContactItem, 'label' | 'type'>;

export default function Contact() {
  const { isVisible, toggleModal } = useModal();
  const [selected, setSelected] = useState<SelectedType>({
    label: contactItems[0].label,
    type: contactItems[0].type,
  });

  const handleClick = (selectedItem: SelectedType) => {
    setSelected(selectedItem);
    toggleModal();
  };

  return (
    <div>
      <Head title='문의 | ABCDEdu' />
      <div className='h-[400px] xs:h-[600px] flex-col-center gap-12 leading-[1.3]'>
        <h2 className='xs:text-18 text-neutral-400'>
          ABCDEdu에 대해 문의 사항이 있으신가요?
        </h2>
        <h2 className='text-64 xs:text-80 text-primary-300 font-bold'>
          CONTACT
        </h2>
      </div>
      <div
        className='flex max-lg:flex-col-center flex-wrap gap-50 px-28 
        xs:px-70 py-50 leading-[1.4]'
      >
        {contactItems.map(item => (
          <div
            className='flex-col-center flex-1 max-lg:max-w-[400px] gap-10 
            p-40 lg:p-24 xl:p-40 rounded-[20px] bg-neutral-100 shadow-lg'
            key={item.type}
          >
            <h3 className='text-30 font-bold'>{item.label}</h3>
            <CardIcon Icon={item.icon} />
            <span className='text-18 text-center break-keep'>
              {item.message}
            </span>
            <button
              type='button'
              className='w-full max-w-227 h-57 my-10 rounded-[20px] 
              text-primary-300 text-15 btn-white-pb px-16 py-8 font-semibold'
              onClick={() => handleClick(item)}
            >
              작성하기
            </button>
          </div>
        ))}
      </div>
      <ContactModal
        selected={selected}
        isVisible={isVisible}
        onClose={toggleModal}
      />
    </div>
  );
}
