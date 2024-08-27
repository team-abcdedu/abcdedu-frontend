import Book from '@/assets/icons/book.svg?react';
import Edit from '@/assets/icons/edit.svg?react';

function ClassContent() {
  const buttonWrapperStyle =
    'min-w-100 min-h-[140px] flex flex-col justify-start items-center';
  const buttonStyle = 'w-100 h-100 flex-row-center';
  const iconStyle = 'w-90 h-90 text-primary-300';
  const textStyle = 'text-25 font-semibold text-center';

  return (
    <div className={'mt-30 mb-100'}>
      <div className={'flex-row-center gap-50 '}>
        <div className={buttonWrapperStyle}>
          <button className={buttonStyle}>
            <Book className={iconStyle} />
          </button>
          <div className={textStyle}>이론</div>
        </div>
        <div className={buttonWrapperStyle}>
          <button className={buttonStyle}>
            <Edit className={iconStyle} />
          </button>
          <div className={textStyle}>시험</div>
        </div>
      </div>
    </div>
  );
}

export default ClassContent;
