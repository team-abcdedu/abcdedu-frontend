import Head from '@/components/Head';

import MobileLinks from './components/MobileLinks';
import TeamInfo from './components/TeamInfo';

export default function AboutUs() {
  const h3Style =
    'mt-20 mb-30 tracking-[2px] text-26 sm:text-30 text-primary-400';

  return (
    <div>
      <Head title='회사소개 | ABCDEdu' />
      <div className='w-full h-[600px] flex-col-center bg-primary-400'>
        <h2 className='text-center text-white leading-[1.3] font-bold'>
          <span className='block text-18 tracking-[6px] -mr-6 pb-12'>
            ABOUT
          </span>
          <span className='text-64 xs:text-80'>ABCDEdu</span>
        </h2>
      </div>
      <section className='py-80 flex-col-center'>
        <h2
          className='px-24 text-32 xs:text-40 font-bold text-primary-400 
          text-center break-keep leading-[1.4] mb-50'
        >
          안녕하세요!
          <br /> ABCDEdu 대표 한서현입니다
        </h2>
        <div
          className='px-24 flex-col-center gap-20 text-18 font-semibold max-w-[848px] 
          w-full break-keep text-center'
        >
          <p>
            {`ABCDEdu는 향후 '데이터 및 기술 문맹'으로 인해 나타날 수 있는 학생들 간
          정보 격차 문제를 '맞춤형 데이터 사이언스 교육 서비스'라는 아이템을
          이용하여 해결하는 팀입니다.`}
          </p>
          <p>
            {`'데이터'와 '인공지능'을 특징으로 하는 현대 및 미래 사회에서는 모든 영역에 있어 데이터와 기술을 이해하는 사람과 그렇지 않은 사람으로 나뉠 것입니다.`}
          </p>
          <p>
            {`따라서 현재 서울시 학교와 대학 이상 전공자 등 특정 계층을 중심으로 편중된 데이터 사이언스 관련 교육을 전국으로 공급 및 확산시키는 문제를 해결할 필요가 있습니다.`}
          </p>
          <p>
            {`이를 통해 2025년부터 시작될 고교학점제 시대에 대비하고, 지역 및 배경과 관계없이 누구나 어릴 때부터 데이터 사이언스 교육을 받을 수 있게 함으로써 인재 양성 및 국가 경쟁력 제고에 기여하고자 합니다.`}
          </p>
          <p>
            {`나아가 공교육을 혁신하고, 궁극적으로 세계의 데이터 문맹 문제를 해결하는 것이 우리 팀의 꿈입니다.`}
          </p>
        </div>
        <TeamInfo />
        <div
          className='px-24 w-full flex-col-center gap-35 text-center font-bold [&_p]:text-18 
          xs:[&_p]:text-24 [&_p]:font-semibold about-gradient leading-[1.4] mt-100 mb-50'
        >
          <h3 className={h3Style}>ABCDEdu Mission</h3>
          <p>
            ABCDEdu는 인공지능이 인간지능을 대체해 가는 시대에서 대체 불가능한
            사람이 되기 위한 역량을 길러주는 교육을 제공한다.
          </p>
          <h3 className={h3Style}>ABCDEdu Vision</h3>
          <p className='mb-20'>
            ABCDEdu는 내부적으로 변화하기 어려운 공교육을 혁신한다.
          </p>
        </div>
        <MobileLinks />
      </section>
    </div>
  );
}
