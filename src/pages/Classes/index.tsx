import Head from '@/components/Head';
import useClassDataList from '@/hooks/class/useClassDataList';

import ClassOverview from './components/ClassOverview';
import Hero from './components/Hero';
import MediaContents from './components/MediaContents';

function Classes() {
  const { classDataList } = useClassDataList();

  return (
    <>
      <Head
        title='ABCD CLASSES | ABCDEdu'
        description='AI & Data 사회에서 진로를 준비하기 위한 ABCDEdu만의 특별한 수업!'
      />
      <Hero />
      <MediaContents />
      {classDataList &&
        classDataList.map((classData, index) => (
          <ClassOverview
            key={classData.title}
            index={index}
            classData={classData}
          />
        ))}
    </>
  );
}

export default Classes;
