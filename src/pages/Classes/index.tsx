import ClassList from '@/pages/Classes/components/ClassList';
import CurriculumTable from '@/pages/Classes/components/CurriculumTable';
import Hero from '@/pages/Classes/components/Hero';
import MediaContents from '@/pages/Classes/components/MediaContents';

function Index() {
  return (
    <>
      <Hero />
      <MediaContents />
      <ClassList />
      <CurriculumTable />
    </>
  );
}

export default Index;
