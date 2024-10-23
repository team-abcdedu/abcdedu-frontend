import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import Head from '@/components/Head';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import AboutUs from './components/AboutUs';
import AnimatedSection from './components/AnimatedSection';
import Banner from './components/Banner';
import ContentInfo from './components/ContentInfo';
import Curriculum from './components/Curriculum';
import Hero from './components/Hero';
import Message from './components/Message';

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const sections = [AboutUs, Curriculum, ContentInfo, Message];
  const [visibleSections, setVisibleSections] = useState<typeof sections>([]);
  const [sectionIdx, setSectionIdx] = useState(0);

  const { setIsAllSectionsLoaded } = useOutletContext<{
    setIsAllSectionsLoaded: (value: boolean) => void;
  }>();

  const loadSection = () => {
    setVisibleSections(prev => [...prev, sections[sectionIdx]]);
    if (sectionIdx === sections.length - 1) setIsAllSectionsLoaded(true);
    setSectionIdx(prev => prev + 1);
  };

  useIntersectionObserver({
    target: ref,
    onIntersect: loadSection,
    enabled: sectionIdx < sections.length,
  });

  return (
    <div>
      <Head />
      <Hero />
      <Banner />
      {visibleSections.map((SectionComponent, i) => (
        <AnimatedSection key={i}>
          <SectionComponent />
        </AnimatedSection>
      ))}
      <div className='w-full h-10' ref={ref} />
    </div>
  );
}
