import Head from '@/components/Head';

import AboutUs from './components/AboutUs';
import ContentInfo from './components/ContentInfo';
import Curriculum from './components/Curriculum';
import Hero from './components/Hero';
import Message from './components/Message';

export default function Home() {
  return (
    <div>
      <Head />
      <Hero />
      <AboutUs />
      <Curriculum />
      <ContentInfo />
      <Message />
    </div>
  );
}
