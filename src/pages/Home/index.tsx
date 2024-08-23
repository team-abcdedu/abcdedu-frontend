import Head from '@/components/Head';

import Classes from './components/Classes';
import ContentInfo from './components/ContentInfo';
import Hero from './components/Hero';
import Inquiry from './components/Inquiry';
import Introduce from './components/Introduce';
import Message from './components/Message';
import Reviews from './components/Reviews';

export default function Home() {
  return (
    <div>
      <Head />
      <Hero />
      <Introduce />
      <Message />
      <ContentInfo />
      <Reviews />
      <Classes />
      <Inquiry />
    </div>
  );
}
