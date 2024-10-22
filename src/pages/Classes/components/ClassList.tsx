import { Link } from 'react-router-dom';

import useGetClass from '@/hooks/class/useGetClass';

import ClassOverview from './ClassOverview';

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

  const { data, isError, isLoading } = useGetClass();

  if (isError || isLoading) {
    return null;
  }

  return (
    <>
      {data &&
        data.map((classData, index) => {
          return (
            <section
              key={classData.title}
              className={`min-h-60 p-50 sm:py-100 sm:px-70 flex flex-col lg:flex-row items-center gap-70 ${bgColors[index]}`}
            >
              <Link
                className={
                  'min-w-115 min-h-115 h-115 flex-row-center bg-white rounded-[100%] text-80'
                }
                to={`/classes/${classData.title.toLowerCase()}`}
              >
                <span
                  className={`text-80 font-bold text-center ${textColors[index]}`}
                >
                  {classData.title}
                </span>
              </Link>
              <ClassOverview classData={classData} />
            </section>
          );
        })}
    </>
  );
}

export default ClassList;
