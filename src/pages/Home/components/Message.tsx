// import AnimatedSection from './AnimatedSection';

export default function Message() {
  return (
    <div
      className='h-[824px] max-xs:h-[624px] bg-primary-400 flex-col-center 
      px-24 tracking-tight'
    >
      <div className='max-w-[800px] text-white text-center mx-auto'>
        <h2 className='text-64 font-extrabold leading-[1.4] mb-60 max-xs:text-28'>
          Why ABCDEdu?
        </h2>
        <p className='leading-[1.5rem] font-medium max-xs:text-12'>
          학생 여러분들이 10년 후 직업을 가질 때쯤이면, <br /> 직업을 포함한
          우리 인간 사회의 많은 부분에 큰 변화가 있을 것입니다. <br /> <br />
          따라서 누군가 정해 놓은 매뉴얼대로 살아가려는 자세보다는, <br />
          자신이 관심을 기울이는 영역(Domain)에 축적된 방대한 양의
          데이터(Bigdata)로부터 <br /> 어떤 가치를 창출해 낼 수 있을까를
          고민하며 살아가는 자세가 필요합니다. <br /> <br />
          이때, 빅데이터를 다루기 위한 수단으로 <br /> 인공지능(Ai)과
          컴퓨터(Coding)에 관한 지식이 필요합니다. <br /> <br />이{' '}
          {`"A, B, C, D"`} 4가지를 중심으로 사고하며 살아간다면 <br /> 분명
          여러분 각자만의 꿈과 인생을 찾을 수 있을 것이라 확신합니다. <br />{' '}
          <br />
          인공지능에게 대체되지 않는 인재로 거듭날 수 있도록 ABCDEdu가 함께
          하겠습니다.
        </p>
      </div>
    </div>
  );
}
