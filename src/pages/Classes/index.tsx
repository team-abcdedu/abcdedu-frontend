import Head from '@/components/Head';

import CourseList from './components/CourseList';
import Hero from './components/Hero';
import MediaContents from './components/MediaContents';

function Classes() {
  return (
    <>
      <Head
        title='ABCD CLASSES'
        description='AI & Data 사회에서 진로를 준비하기 위한 ABCDEdu만의 특별한 수업!'
      />
      <Hero />
      <MediaContents />
      <CourseList />
    </>
  );
}

export default Classes;
