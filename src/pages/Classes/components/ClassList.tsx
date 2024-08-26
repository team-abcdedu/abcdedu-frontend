import ClassContents from '@/pages/Classes/components/ClassContents';
import { classInfoMap } from '@/pages/Classes/constants/classInfo';

function ClassList() {
  const bgColors = [
    'bg-primary-75',
    'bg-primary-100',
    'bg-primary-200',
    'bg-primary-300',
  ];
  const textColors = [
    'text-primary-75',
    'text-primary-100',
    'text-primary-200',
    'text-primary-300',
  ];

  return (
    <>
      {Object.entries(classInfoMap).map(([title, classInfo], index) => {
        return (
          <section
            key={title}
            className={`min-h-[60px] p-50 sm:py-100 sm:px-70 flex flex-col lg:flex-row items-center gap-70 ${bgColors[index]}`}
          >
            <div
              className={
                'min-w-115 min-h-115 h-115 grid place-items-center bg-white rounded-[100%] text-80'
              }
            >
              <span
                className={`text-80 font-bold text-center ${textColors[index]}`}
              >
                {title}
              </span>
            </div>
            <ClassContents classInfo={classInfo} />
          </section>
        );
      })}
    </>
  );
}

export default ClassList;
