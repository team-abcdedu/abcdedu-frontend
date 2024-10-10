import Head from '@/components/Head';

import AboutUs from './components/AboutUs';
import ContentInfo from './components/ContentInfo';
import Curriculum from './components/Curriculum';
import Hero from './components/Hero';
import Message from './components/Message';

export default function Home() {
  // sentry 로깅 테스트 후 삭제 예정
  const onClick = () => {
    throw new Error('This is a test error!');
  };
  return (
    <div>
      <button onClick={onClick}>오류 테스트용</button>
      <Head />
      <Hero />
      <AboutUs />
      <Curriculum />
      <ContentInfo />
      <Message />
    </div>
  );
}
