import Head from '@/components/Head';

import AboutUs from './components/AboutUs';
import AnimatedSection from './components/AnimatedSection';
import Banner from './components/Banner';
import ContentInfo from './components/ContentInfo';
import Curriculum from './components/Curriculum';
import Hero from './components/Hero';
import Message from './components/Message';

export default function Home() {
  return (
    <div>
      <Head />
      <Hero />
      <Banner />
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection>
        <Curriculum />
      </AnimatedSection>
      <AnimatedSection>
        <ContentInfo />
      </AnimatedSection>
      <AnimatedSection>
        <Message />
      </AnimatedSection>
    </div>
  );
}
